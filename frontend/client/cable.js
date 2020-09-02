import { createConsumer } from "@rails/actioncable";

let consumer;

// create cable consumer for frontend so user can connect to ChatChannel
const createChannel = (...args) => {
  if (!consumer) {
    consumer = createConsumer();
  }

  return consumer.subscriptions.create(...args);
};

export default createChannel;
