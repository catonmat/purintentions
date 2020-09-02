class ChatChannel < ApplicationCable::Channel
  # this method is called when a user is subscribed to the channel
  def subscribed
    # this method hooks the client's browser to a channel so it receives ws:// updates
    stream_from "chat"
  end

  def send_message(payload)
    # payload[:message] sent from client side as:
    # /frontend/client/chat.js
    # const sendMessage = (message) => chat.perform("send_message", { message });
    puts payload
    message = Message.new(author: current_user, text: payload['message'])

    ActionCable.server.broadcast("chat", message: render(message)) if message.save
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  private

  def render(message)
    # We create a new instance of ApplicationController to access the helper methods; we cannot access standard rails controllers from app/channels
    ApplicationController.new.helpers.c("message", message: message)
  end
end
