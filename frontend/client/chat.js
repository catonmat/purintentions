import createChannel from "client/cable";

let callback;

const chat = createChannel("ChatChannel", {
  received({ message }) {
    if (callback) callback.call(null, message);
  },
});

// invoke Server-side channel function `send_message` n `app/channels/chat_channel/.rb`
const sendMessage = (message) => chat.perform("send_message", { message });

const setCallback = (fn) => {
  callback = fn;
};

export { sendMessage, setCallback };
