// Css styleni o'zgartirish

const sarlavha = document.querySelector("h1");

// sarlavha.setAttribute("style", "margin-left:50px");
// Bu yo'l bilan yozganimizda elementning o'zining style o'chib qoladi va bu katta hatolik keltirib chiqarishi mumkin

console.log(sarlavha.style);
sarlavha.style.marginLeft = "150px";
sarlavha.style.color = "orange";
sarlavha.style.fontFamily = "sans-serif";
