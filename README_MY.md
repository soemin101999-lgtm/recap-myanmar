# RECAP MYANMAR — စတင်တည်ဆောက်ရန်

ဒီ project သည် iPhone/Android browser နှစ်မျိုးလုံးတွင် အသုံးပြုနိုင်မည့် web-app starter ဖြစ်သည်။

## ပါဝင်ပြီးသား
- Mobile-friendly RECAP MYANMAR UI
- ဖုန်းထဲမှ video ရွေးပြီး preview ကြည့်ခြင်း
- Server သို့ video upload လုပ်ခြင်း
- မူရင်းဘာသာစကား၊ မြန်မာအမျိုးသားအသံ၊ မူရင်းအသံဖယ်ရှားရန် ရွေးချယ်မှု UI

## အရေးကြီးသော ကန့်သတ်ချက်
ဤ starter သည် အပြည့်အဝ AI dubbing မလုပ်သေးပါ။ တကယ့် dubbing အတွက် server ဘက်တွင် အောက်ပါဝန်ဆောင်မှုများကို ချိတ်ဆက်ရမည်။
1. Speech-to-text (ဗီဒီယိုအသံမှ စာသားထုတ်ခြင်း)
2. Translation API (မြန်မာဘာသာပြန်ခြင်း)
3. Burmese male Text-to-Speech API (မြန်မာအသံထုတ်ခြင်း)
4. FFmpeg (ဗီဒီယိုနှင့် အသံကို MP4 အဖြစ် ပေါင်းစပ်ခြင်း)

API key များကို browser ထဲတွင် မထည့်ပါနှင့်။ Server ၏ `.env` ထဲတွင်သာ ထည့်ပါ။ API အသုံးပြုမှုအတွက် ကုန်ကျစရိတ်နှင့် ဝန်ဆောင်မှုစည်းမျဉ်းများ ရှိနိုင်သည်။ ကိုယ်ပိုင် သို့မဟုတ် အသုံးပြုခွင့်ရှိသော ဗီဒီယိုများကိုသာ တင်ပါ။

## စတင်ရန်
Node.js 20+ လိုအပ်သည်။

```bash
npm install
cp .env.example .env
npm start
```

ပြီးလျှင် `http://localhost:3000` ကိုဖွင့်ပါ။

## ဖုန်းတစ်လုံးတည်းဖြင့် ဆက်လုပ်ရန်
1. ZIP ကို ဖြည်ပါ။
2. GitHub သို့ project ဖိုင်များ upload လုပ်ပါ။
3. Browser မှ cloud coding/deployment service တစ်ခုတွင် repository ကို ချိတ်ပါ။
4. `npm install` နှင့် `npm start` ဖြင့် run လုပ်ပါ။
5. Public HTTPS URL ရလာလျှင် iPhone/Android browser မှ ဖွင့်နိုင်သည်။

iPhone တွင် Safari > Share > Add to Home Screen ဖြင့် home screen ပေါ်တင်နိုင်သည်။ Android တွင် Chrome > menu > Add to Home screen ကို သုံးနိုင်သည်။ Native App Store/Play Store ထုတ်ဝေခြင်းသည် သီးခြား build နှင့် developer account လိုအပ်နိုင်သည်။
