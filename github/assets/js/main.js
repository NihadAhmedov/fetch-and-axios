const inp = document.getElementById("inp");
const yazi = document.getElementById("h1");
const myDiv = document.getElementById("myDiv");
const API = "https://api.github.com/users/"
const form = document.getElementById('form')


form.addEventListener('submit',(e)=>{
    e.preventDefault(), search();
})

const search = () => {
  fetch(API + inp.value)
    .then((res) => res.json())
    .then((data) => {
      renderSearch(data);
    });
};



const renderSearch = (data) => {
  myDiv.innerHTML = "";
  const newSearch = document.createElement("h2");
  newSearch.textContent = data.login;

  const newP = document.createElement("p");
  newP.textContent =`Follewers: ${data.followers }`;

  const newtwoP = document.createElement("p");
  newtwoP.textContent = `Following: ${data.following};`

  const image = document.createElement("img");
  image.src =data.avatar_url;

  myDiv.append(newSearch, newP, newtwoP, image);
};
