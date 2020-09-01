class ChatController < ApplicationController

    def show
        @messages = Message.order(created_at: :asc).last(20)
    end

    private

    def authenticate!
        redirecto_to login_path unless session[:username]
    end
end
