// generate a random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);







// let interval;

// document.getElementById('start').addEventListener('click', function() {
//     interval = setInterval(() => {
//         document.body.style.backgroundColor =
//             '#' + Math.floor(Math.random()*16777215).toString(16);
//     }, 1000); // change every 1 second
// });

// document.getElementById('stop').addEventListener('click', function() {
//     clearInterval(interval);
// });
