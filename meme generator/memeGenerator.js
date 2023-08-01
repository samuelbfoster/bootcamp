document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  const memeContainer = document.getElementById("memes");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let textTop = document.getElementById("top-text").value;
    let textBot = document.getElementById("bot-text").value;
    const image = document.getElementById("image").value;

    const meme = document.createElement("div");
    meme.classList.add("meme");
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Meme";
    meme.appendChild(img);

    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("textTop");
    topTextDiv.innerText = textTop;
    meme.appendChild(topTextDiv);

    const botTextDiv = document.createElement("div");
    botTextDiv.classList.add("textBot");
    botTextDiv.innerText = textBot;
    meme.appendChild(botTextDiv);

    memeContainer.appendChild(meme);
    form.reset();
  });
});
