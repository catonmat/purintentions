import "./messages.pcss";
import "components/message/message";
import { setCallback } from "client/chat";

const scrollToBottom = (element) => {
  // eslint-disable-next-line
  element.scrollTop = element.scrollHeight;
};

const messages = document.querySelector(".js-messages");

if (messages) {
  const content = document.querySelector(".js-messages--content");

  scrollToBottom(content);

  setCallback((message) => {
    content.insertAdjacentHTML("beforeend", message);

    scrollToBottom(content);
  });
}
