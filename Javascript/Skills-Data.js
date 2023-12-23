const Skills = [
  {
    Title: "html & css",
    Image: "image/Html_CSS.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit .Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "javascript",
    Image: "image/icons8-javascript.svg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit .Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "React js",
    Image: "image/React_js.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit .Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "ux & ui",
    Image: "image/UiUX.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit .Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  {
    Title: "mern stack",
    Image: "image/Web_developer.png",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit .Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
  },
  
];



document.addEventListener('DOMContentLoaded',(event)=>{
    const Contents = document.getElementById('Skills-Data')
    
    Skills.map((Skills)=>{
        let Content = `
        <div class="box-language">
        <img src="${Skills.Image}" class="icon-skill" />
        <div class="box-text-tech">
          <h5>${Skills.Title}</h5>
          <p>${Skills.description}</p>
        </div>
      </div> `;
      Contents.innerHTML += Content;  
    })
    
})



/**
 * 
 */