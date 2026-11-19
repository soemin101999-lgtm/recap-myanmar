const express = require("express");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 20 * 1024 * 1024 }
});

const TTS_URL = "https://freococo-myanmartts.hf.space";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "SOE RECAP MYANMAR",
    status: "Server is ready"
  });
});

app.post("/tts", upload.single("ref_audio"), async (req, res) => {
  try {
    const { text, step = 20, cfg = 2, solver = "euler",
      temperature = 0.8 } = req.body;

    if (!text || !req.file) {
      return res.status(400).json({
        error: "မြန်မာစာနဲ့ နမူနာအသံဖိုင် လိုအပ်ပါတယ်။"
      });
    }

    const form = new FormData();
    form.append("files", new Blob(
      [req.file.buffer],
      { type: req.file.mimetype }
    ), req.file.originalname);

    const uploadResponse = await fetch(
      `${TTS_URL}/gradio_api/upload`,
      { method: "POST", body: form }
    );

    if (!uploadResponse.ok) {
      throw new Error("TTS အသံဖိုင် Upload မအောင်မြင်ပါ။ " +
        uploadResponse.status);
    }

    const paths = await uploadResponse.json();

    const response = await fetch(
      `${TTS_URL}/gradio_api/call/v2/generate_speech`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          ref_audio: JSON.stringify({
            path: paths[0],
            meta: { _type: "gradio.FileData" }
          }),
          step: Number(step),
          cfg: Number(cfg),
          solver,
          temperature: Number(temperature)
        })
      }
    );

    if (!response.ok) {
      throw new Error("MyanmarTTS API error: " + response.status);
    }

    const result = await response.json();

    const outputResponse = await fetch(
      `${TTS_URL}/gradio_api/call/generate_speech/${result.event_id}`
    );

    const stream = await outputResponse.text();
    const events = stream.split("\n");

    const complete = events.find(line =>
      line.startsWith("data:") &&
      events[events.indexOf(line) - 1] === "event: complete"
    );

    if (!complete) {
      throw new Error("အသံထုတ်မှု မပြီးဆုံးသေးပါ။");
    }

    const output = JSON.parse(complete.slice(5).trim());

    res.json({
      status: "success",
      audio: output
    });

  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("SOE RECAP MYANMAR running on " + PORT);
});

