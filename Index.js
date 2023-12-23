// main Page Home page

const Working = [
  {
    Title: "Web Developer",
    description:
      "Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise ",
    Image: "image\Web_developer.png",
  },
  {
    Title: "UX & UI Developer",
    description:
      "Experienced Web Developer | Building Seamless Digital Experiences with Front-End & Back-End Expertise ",
    Image: "https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg",
  },
];

document.addEventListener('DOMContentLoaded', (event) => {
    const WorkingMain = document.getElementById("Working-main");
  
    Working.forEach((Tech_Item) => {
      let data = `<div class="box-tech">
        <img
          src="${Tech_Item.Image}"
          alt="${Tech_Item.Title}"
          class="image-project"
        />
        <div class="box-text-tech">
          <h1>${Tech_Item.Title}</h1>
          <p>${Tech_Item.description}</p>
        </div>
      </div>`;
      WorkingMain.innerHTML += data;
    });
  });
  