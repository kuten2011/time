window.onload = function () {
  setInterval(myFunction, 1000);
};

function myFunction() {
  const now = new Date();
  const dayOfWeek =
    now.getHours().toString().padStart(2, "0") +
    ":" +
    now.getMinutes().toString().padStart(2, "0") +
    ":" +
    now.getSeconds().toString().padStart(2, "0");
  document.getElementById("demo").innerHTML = dayOfWeek;
}
