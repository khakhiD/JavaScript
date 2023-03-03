const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
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
      document.body.append(img);
    }
  }
};
