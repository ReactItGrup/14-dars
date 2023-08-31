// Attrebutes

const link = document.querySelector("a");
console.log(link);

// get => Olish

// set => Qo'shish, O'rnatish

// Agar biz o'zgaruvchiga berilgan attrebute ni kormoqchi bolsak getAttrebute dan foydalanamiz

// console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.google.com");
link.textContent = "Go to Google main page";

// setAttrebue orqali style berishimiz ham mumkin

link.setAttribute(
  "style",
  "color:gold; background-color:green; display:block;"
);
