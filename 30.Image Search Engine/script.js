"use strict";

const accessKey = "nRr8-ez618EIY2rwAXuBSF1addI7370SrEYKIFZUWHQ";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

const searchImages = async function () {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    //new element
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;

    //open tab in a new tab
    imageLink.target = "_blank";

    //the img tag inside the A element
    imageLink.appendChild(image);

    // we have to append the child where we want the result to appear
    searchResult.appendChild(imageLink);
  });
  showMoreBtn.style.display = "block";
};

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
