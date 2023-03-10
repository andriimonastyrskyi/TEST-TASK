const form = document.querySelector(".hero");
const send = document.querySelector("#send");

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
