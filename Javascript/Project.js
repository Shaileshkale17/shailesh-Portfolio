const ProjectData = [
  {
    Title: "Jewellery",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/jewellery1452.PNG",
    Link: "https://shaileshkale17.github.io/JewellerySwift/",
    description:
      "JewellerySwift is an innovative online platform offering a curated collection of stylish and timeless jewelry pieces. With a focus on quality craftsmanship and unique designs, it provides a seamless shopping experience for those seeking elegant accessories.",
    Languages: ["HTML "," CSS ", " JavaScript"],
  },
  {
    Title: "Pomodoro Timer",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/pomoto-time.webp",
    Link: "https://pomodro-timer-app-shailesh.netlify.app/",
    description:
      'The Pomodoro Timer is a productivity technique involving 25-minute focused work intervals (Pomodoros) followed by short breaks, aiding concentration and time management. It helps enhance productivity and maintain a balance between work and rest.',
      Languages: [' reactJs ', ' firebase ' , ' redux ' ],
    },
  {
    Title: "Github Profile",
    Image: "image/icons8-project-80.png",
    ImageProject: "image/github-Api.webp",
    Link: "https://githubprofilesite.netlify.app/",
    description:
      " GitHub Profile API website provides a seamless interface to access and retrieve information from GitHub user profiles, offering developers a convenient way to integrate and display GitHub data in their applications .  ",
      Languages: [' React ', ' axios '],
    
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


