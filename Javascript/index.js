console.log("HEllo i am runing ");

const hamburger = document.querySelector(".hamburger");

hamburger.onclick = () => {
  let header = document.querySelector("header ");
  let navber = document.querySelector(".header-pos ");
  let Navber_none = document.querySelector(".image-navber ");
  header.style.transition = "0.5s ease-in-out";
  // if(navber.classList.contains("active")){
  //     // navber this is the
  // }
  // else{
  // }
  header.style.height = "350px";
  navber.style.height = "23rem";
  navber.style.top = "0";
  Navber_none.style.display = "none";
};

const closes = document.querySelector(".closes");
closes.onclick = () => {
  let header = document.querySelector("header");
  let navber = document.querySelector(".header-pos");
  let Images = document.querySelector(".header-Image");
  let Navber_none = document.querySelector(".image-navber ");
 

  header.style.height = "10px";
  header.style.transition = "0.5s ease-in-out";
  navber.style.top = "-450px";
  navber.style.height = "0";
//   hamburger.style.display = "none";
//   Images.style.display = "none";
  Navber_none.style.display = "flex";
};
