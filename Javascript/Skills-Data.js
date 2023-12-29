const Skills = [
  {
    Title: "html & css",
    Image: "image/Html_CSS.png",
    description:
      "HTML is the structural language that forms the content of a webpage, while CSS is used for styling and design, enabling the visual presentation of that content.",
  },
  {
    Title: "javascript",
    Image: "image/icons8-javascript.svg",
    description:
      "JavaScript is a versatile programming language used for web development, allowing dynamic interactions on websites, from simple animations to complex applications, through its powerful scripting capabilities.",
  },
  {
    Title: "React js",
    Image: "image/React_js.png",
    description:
      "React.js is a powerful JavaScript library used for building user interfaces, enabling efficient creation of interactive web applications through its component-based architecture.",
  },
  {
    Title: "ux & ui",
    Image: "image/UiUX.png",
    description:
      "UX (User Experience) & UI (User Interface) design focus on crafting seamless, intuitive digital experiences by understanding user needs and translating them into visually engaging and functional interfaces.",
  },
  {
    Title: "mern stack",
    Image: "image/Web_developer.png",
    description:
      "The MERN stack comprises MongoDB, Express.js, React, and Node.js, offering a robust, full-stack JavaScript framework for building web applications, from the backend to the frontend, with seamless data flow and scalability.",
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