const form = document.querySelector(".hero");
const send = document.querySelector("#send");
const btn = document.querySelector("#btn");

const totalInput = form.elements;

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

btn.addEventListener("click", submitPoll);

function submitPoll(e) {
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 1000);
}
