const form = document.querySelector("#searchForm");
const imgBox = document.querySelector("#imgBox");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  removeChild(imgBox);
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  try {
    const res = await axios.get(`https://api.tvmaze.com/search/people`, config);
    makeImages(res.data);
    form.elements.query.value = "";
  } catch (e) {
    console.log(e);
  }
});

const makeImages = (name) => {
  for (let result of name) {
    if (result.person.image) {
      const img = document.createElement("IMG");
      img.src = result.person.image.medium;
      const box = document.createElement("div")
      box.setAttribute("id", "imgBox");
      document.body.append(box);
      document.querySelector("#imgBox").append(img);
    }
  }
};

const removeChild = (div) => {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}