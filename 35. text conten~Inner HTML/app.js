// DOM Elements

// textContent

// const title = document.getElementById("title");
// console.log(title.textContent);

// Biz bu elementni ichidagi ma'lumotni o'zgartirish uchun textContent dan foydalanimz

// console.log(title.textContent);

// title.textContent = "new text";
// Agar biz davomiga so'z qo'shmoqchi bo'lsak + ishlatamiz
// title.textContent += " new text";

// const lessons = document.querySelectorAll(".list-item");

// lessons.forEach((word) => {
//   console.log((word.textContent += " darslari")); // test
//   word.textContent += " darslari"; // normal
// });

// innerHTML

const title = document.getElementById("title");
title.innerHTML += " innerHTML";

// innerHTML ni textContent dan farqu bu bilan biz tag qoshib ketishimiz ham mumkin

// Misol tariqasida ol ga li qoshib ko'ramiz

const names = ["Asilbek", "Asadbek", "Nodirbek"];
const ol = document.querySelector("ol");
names.forEach((name) => {
  ol.innerHTML += `<li>${name}</li>`;
});
