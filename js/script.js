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

function iterateTextB() {
  let result = "";
  for (let i = 0; i < 2867; i++) {
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ*abcdefghijklmnopqrstuvwxyz0123456789";
    let randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    result += randomCharacter;
  }
  textbox.innerText = result;
}

let intervalId = setInterval(iterateText, 90); // Change 100 to the desired speed of your animation

// To stop the animation after a certain time, you can use setTimeout
setTimeout(function () {
  clearInterval(intervalId);
}, 100000); // This will stop the animation after 100 seconds
