window.onload = function () {
  document.querySelector(".hero").classList.add("hero-animated");
};

let textbox = document.getElementById("textbox");

let seedText = textbox.innerText;

function iterateText() {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomCharacter = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );

  seedText = randomCharacter + seedText.slice(0, -1);

  textbox.innerText = seedText;
}

let intervalId = setInterval(iterateText, 90);

setTimeout(function () {
  clearInterval(intervalId);
}, 1000000);
