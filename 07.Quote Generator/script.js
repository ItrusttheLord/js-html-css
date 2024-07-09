const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const nextQuoteBtn = document.querySelector(".next-quote-btn");
const tweetBtn = document.querySelector(".tweet-btn");

const getRandomQuote = async function (url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.quote;
  author.innerHTML = data.author;
};
getRandomQuote(api_url);

nextQuoteBtn.addEventListener("click", () => getRandomQuote(api_url));

const tweet = function () {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- By " +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
};

tweetBtn.addEventListener("click", () => tweet());
