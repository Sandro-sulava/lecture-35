// let count = 0;

// const intervalId = setInterval(() => {
//   count = count + 1;
//   console.log("Interval Count: ", count);

//   if (count === 5) {
//     clearInterval(intervalId);
//     console.log("timer stopped");
//   }
// }, 1000);

let timerBtn = document.querySelector("#timerBtn");

let interval;

timerBtn.addEventListener("click", function () {
  let seconds = Number(document.querySelector("#seconds").value);
  clearInterval(interval);

  interval = setInterval(() => {
    seconds = seconds - 1;

    const output = document.querySelector("#output");
    output.textContent = seconds;

    if (seconds === 0) {
      clearInterval(interval);
    }
    console.log(seconds);
  }, 1000);
});
