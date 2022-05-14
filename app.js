$("form").on("submit", (e) => {
  e.preventDefault();
  $searchTerm = $("#search");
  getGIF($searchTerm.val());
  $searchTerm.val("");
});

$("#remove").on("click", () => {
  $(".meme-area").empty();
});

function addGIF(url) {
  let $newCol = $("<div>", { class: "col-12 col-md-6 col-lg-4 my-3" });
  let $newGIF = $("<img>", { src: url, class: "img-fluid rounded" });
  $newCol.append($newGIF).appendTo($(".meme-area"));
}

async function getGIF(searchTerm) {
  const gifs = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "VbE9SsS7BIpKbeK7CA8LPa0rD09vNiiz",
      q: searchTerm,
    },
  });
  let randomIdx = Math.floor(Math.random() * gifs.data.data.length);
  let url = await gifs.data.data[randomIdx].images.original.url;
  addGIF(url);
}
