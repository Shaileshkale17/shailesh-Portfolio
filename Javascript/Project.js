const ProjectData = [
  {
    Title: "Project 1",
    Image: "Image/icons8-project-80.png",
    ImageProject: "Image/Avatar-shailesh.jpg",
    Link: "https://www.google.com/",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "Project 1",
    Image: "Image/icons8-project-80.png",
    ImageProject: "Image/Avatar-shailesh.jpg",
    Link: "https://www.google.com/",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "Project 1",
    Image: "Image/icons8-project-80.png",
    ImageProject: "Image/Avatar-shailesh.jpg",
    Link: "https://www.google.com/",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "Project 1",
    Image: "Image/icons8-project-80.png",
    ImageProject: "Image/Avatar-shailesh.jpg",
    Link: "https://www.google.com/",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },

];

document.addEventListener("DOMContentLoaded", (e) => {
  const Projects = document.getElementById("ProjectData");
  ProjectData.forEach((Data) => {
console.log(Data)
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
              </div>
            </a>
`;
    Projects.innerHTML += Project;
  });
});


