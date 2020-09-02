import "./message-form.pcss";
import { sendMessage } from "client/chat";

const isMac = navigator.platform.match(/mac/i) != null;

const handleLineBreak = (input) => {
  // eslint-disable-next-line
  input.value = `${input.value}\n`;
};

const handleSubmit = (input) => {
  const { value } = input;

  if (value.length === 0) {
    return;
  }

  sendMessage(input.value);

  // eslint-disable-next-line
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
