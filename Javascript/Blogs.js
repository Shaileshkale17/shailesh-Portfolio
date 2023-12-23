const Blog = [
  {
    Title: "HTML Tag",
    ImageIcon: "image/icons8-blog.svg",
    Iamge: "image/Avatar-shailesh.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et dolores non quibusdam sed optio error, pariatur explicabo earum iste?",
    Link: "https://www.google.com/",
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
      <p>${BlogItem.description}</p>
    </div>
  </div>
  </a>
    `;
    Blogs.innerHTML+=inBlog
  });
});
