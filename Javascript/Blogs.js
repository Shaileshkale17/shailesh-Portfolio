const Blog = [
  {
    Title: "JavaScript",
    ImageIcon: "image/icons8-blog.svg",
    Iamge: "image/javascript-blog.webp",
    description:
      " Exploring JavaScript Experiments in a Notebook Environment",
    Link: "../blog.html",
    Data:["24-12-2023"]
  },
  {
    Title: "HTml",
    ImageIcon: "image/icons8-blog.svg",
    Iamge: "image/development_img.webp",
    description:
      "",
    Link: "#Blog",
  },
  {
    Title: "css",
    ImageIcon: "image/icons8-blog.svg",
    Iamge: "image/development_img.webp",
    description:
      "",
    Link: "#Blog",
  },
  {
    Title: "react js",
    ImageIcon: "image/icons8-blog.svg",
    Iamge: "image/development_img.webp",
    description:
      "",
    Link: "#Blog",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const Blogs = document.getElementById("Blogs");
  Blog.forEach((BlogItem) => {
    let inBlog = `
   <a href="${BlogItem.Link}">
   <div class="box-language">
    <img src="${BlogItem.ImageIcon}" alt="" class="image-project" />
    <div class="box-text-tech">
      <h5>${BlogItem.Title}</h5>
      <img src="${BlogItem.Iamge}" alt="" />
      <p>${BlogItem.description.length==0?"<spam class='soon'>coming soon...</spam>":BlogItem.description}</p>
    </div>
  </div>
  </a>
    `;
    Blogs.innerHTML+=inBlog
  });
});
