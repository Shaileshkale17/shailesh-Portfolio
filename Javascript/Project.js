const ProjectData = [
  {
    Title: "Project 1",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/Avatar-shailesh.jpg",
    Link: "https://www.google.com/",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
    Languages: ["HTML "," CSS ", " JavaScript"],
  },
  {
    Title: "Project 1",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/development_img.webp",
    Link: "#Project",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
      Languages: [],
    },
  {
    Title: "Project 1",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/development_img.webp",
    Link: "#Project",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
      Languages: [],
    
    },
  {
    Title: "Project 1",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/development_img.webp",
    Link: "#Project",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
      Languages: [],
    },

];

document.addEventListener("DOMContentLoaded", (e) => {
  const Projects = document.getElementById("ProjectData");
  ProjectData.forEach((Data) => {
    let Project = `<a href="${Data.Link}">
              <div class="box-language">
                <img
                  src="${Data.Image}"
                  alt=""
                  class="image-project" />
                <div class="box-text-tech">
                  <h5>${Data.Title}</h5>
                  <img src="${Data.ImageProject}" alt="" />
                  <p>${Data.description}</p>
                </div>
                <hr class="hrLine">
                <p class="capitalize">${Data.Languages.length==0?"<spam class='soon'>coming soon...</spam>":Data.Languages}</p>
              </div>
            </a>
`;
    Projects.innerHTML += Project;
  });
});


