
const today = document.querySelector(".today");
const date = new Date();
const options = {
  weekday:"long",
  day:"numeric",
  month:"long",
  year:"numeric"
};

const todayDate = date.toLocaleString("en-GB", options);

today.innerHTML = todayDate


const ham_menu = document.querySelector(".ham_menu");
const mobile_menu = document.querySelector(".mobile_menu");

ham_menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  if(mobile_menu.style.display === "block"){
    mobile_menu.style.display ="none";
  }else{
    mobile_menu.style.display = "block";
  }
}
