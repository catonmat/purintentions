import "./message-form.pcss";
import { sendMessage } from "client/chat";

const isMac = navigator.platform.match(/mac/i) != null;

const handleLineBreak = (i) => {
  const input = i;
  input.value = `${input.value}\n`;
};

const handleSubmit = (i) => {
  const { value } = i;
  const input = i;

  if (value.length === 0) {
    return;
  }

  sendMessage(input.value);

  input.value = "";
  input.focus();
};

const form = document.querySelector(".js-message-form");

if (form) {
  const input = form.querySelector(".js-message-form--input");
  const submit = form.querySelector(".js-message-form--submit");

  input.addEventListener("keydown", (event) => {
    if (event.code !== "Enter") {
      return;
    }

    event.preventDefault();

    const { altKey, ctrlKey, metaKey, shiftKey } = event;
    const withModifier = altKey || shiftKey || (isMac ? ctrlKey : metaKey);

    if (withModifier) {
      handleLineBreak(input);
    } else {
      handleSubmit(input);
    }
  });

  submit.addEventListener("click", (event) => {
    event.preventDefault();
    handleSubmit(input);
  });
}
