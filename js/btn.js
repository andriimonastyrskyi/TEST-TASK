const form = document.querySelector(".hero");
const send = document.querySelector("#send");
const btn1 = document.querySelector("#btn1");

const totalInput = form.elements;
// console.log([...totalInput]);

// const active = [...totalInput].map((el) => el.check);
form.addEventListener("click", checkInput);

function checkInput(e) {
  if (e.target.nodeName !== "INPUT") return;

  const active = [...totalInput].find((el) => el.checked === true);

  if (active && active.checked) {
    send.disabled = false;
  } else {
    send.disabled = true;
  }

  console.log(active);
}

form.addEventListener("checked", submitPoll);
function submitPoll() {
  document.getElementById("btn1").disabled = true;
  setTimeout(function () {
    document.getElementById("btn1").disabled = false;
  }, 1000);
}

document.getElementById("btn1").addEventListener("click", submitPoll);
