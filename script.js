

const btn = document.querySelector("#emoji");
const emojis = [
  "๐",
  "๐",
  "๐คฃ",
  "๐",
  "๐",
  "๐ค",
  "๐คจ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คฅ",
  "๐ด",
  "๐ฅบ",
  "๐ง",
  "๐",
  "๐ณ",
  "๐",
  "๐ฅด",
  "๐ง",
  "๐คจ",
  "๐",
  "๐ค",
  "๐คญ",
  "๐ฅฐ",
  "๐ค",
  "๐ค",
  "๐คช",
  "๐ฅฒ",
  "๐",
  "๐",
  "๐ฌ",
];

btn.addEventListener("mouseover", () => {
  btn.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
});