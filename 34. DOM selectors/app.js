/*------------- DOM selectors ---------------*/

// 1) getElementsByTagName
// const listItem = document.getElementsByTagName("li");
// console.log(listItem);
// console.log(listItem[0]);
// console.log(listItem.length);

// listItem.forEach((li) => {
//   console.log(li);
// });

// bizdagi listItem arrayga o'xshagani bilan bu array emas bu HTML colection

// 2) getElementsByClassName

// const listItem = document.getElementsByClassName("list-item");
// console.log(listItem);

// bu ham ByTagName bilan deyarli birhil ishlatiladi va bunga ham forEach qilib bo'lmaydi

// 3) getElementById
// html da yozilga id htmlda faqatgina bir marotaba ishlatilishi mumkin va shunin uchun jsda ham getElemets emas getElement yozilgan

// const clickBtn = document.getElementById("click-btn");
// console.log(clickBtn);

// 4) querySelector / querySelectorAll\
// quertSelector bu hohlasa tag, hohlasa class, hohlasa id va hohlasa atrebut olishi mumkin
// DOM dagi istalgan narsani querySelector yordamida tanlab olishingiz mumkin

// const listItem = document.querySelector(".list-item"); //class
// console.log(listItem);

const listItem = document.querySelectorAll(".list-item"); //class

listItem.forEach((item) => {
  console.log(item);
});

// console.log(listItem);
// const listItem = document.querySelector("#list-item"); Id
// const listItem = document.querySelector("li"); Tag
