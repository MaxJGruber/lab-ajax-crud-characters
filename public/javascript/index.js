const charactersAPI = new APIHandler("http://localhost:3000");
const characterContainer = document.querySelector(".characters-container");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList().then((result) => {
        characterContainer.innerHTML = "";
        result.data.forEach((element) => {
          const oneCharacter = document.createElement("div");
          oneCharacter.className = "character-info";
          oneCharacter.innerHTML += `<div class="name">${element.name}</div>
        <div class="occupation">${element.occupation}</div>
        <div class="cartoon">${element.cartoon}</div>
        <div class="weapon">${element.weapon}</div>`;
          characterContainer.appendChild(oneCharacter);
        });
      });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("character-id").value;
      console.log(id, "toto");
      charactersAPI.getOneRegister(id).then((result) => {
        characterContainer.innerHTML = "";
        const oneCharacter = document.createElement("div");
        oneCharacter.className = "character-info";
        oneCharacter.innerHTML += `<div class="name">${result.data.name}</div>
        <div class="occupation">${result.data.occupation}</div>
        <div class="cartoon">${result.data.cartoon}</div>
        <div class="weapon">${result.data.weapon}</div>`;
        characterContainer.appendChild(oneCharacter);
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
