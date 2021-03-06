import createChannel from "client/cable";

// this variable holds function that will be defined when a message is broadcasted
let callback;

// Create Channel for client
// ruby: some_channel
// js: SomeChannel
const chat = createChannel("ChatChannel", {
  // must respect three ActionCable states: connected, disconnected, received
  received({ message }) {
    if (callback) callback.call(null, message);
  },
});

// invoke Server-side channel function `send_message` n `app/channels/chat_channel/.rb`
const sendMessage = (message) => chat.perform("send_message", { message }); // { message } becomes payload['message'] in ChatController.rb

// generic function fired by individual component
const setCallback = (fn) => {
  callback = fn;
};

export { sendMessage, setCallback };
