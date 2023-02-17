// const button = document.querySelector("button");
// const input = document.querySelector("input");

// button.addEventListener("click", () => {
//     if ()

//       else (

//       )
// });

// function disableBtns() {
//     document.getElementById("btn1").disabled = true;
//     document.getElementById("btn2").disabled = true;
//     var timer = setInterval(function(){enableBtns()},1000);
//     //1000 means 1000 milliseconds
//     }

//     function enableBtns(){
//     document.getElementById("btn1").disabled = false;
//     document.getElementById("btn2").disabled = false;
//     clearInterval(timer);
//     }

function submitPoll(id) {
  document.getElementById("send").disabled = true;
  document.getElementById("send").delay(1000).disabled = false;
}

function submitPoll() {
  document.getElementById("disable-btn").disabled = true;
  setTimeout(function () {
    document.getElementById("disable-btn").disabled = false;
  }, 1000);
}

document.getElementById("disable-btn").addEventListener("click", submitPoll);
