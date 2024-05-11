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

let intervalId = setInterval(iterateText, 90); // Change 100 to the desired speed of your animation

// To stop the animation after a certain time, you can use setTimeout
setTimeout(function () {
  clearInterval(intervalId);
}, 1000000); // This will stop the animation after 1000 seconds
