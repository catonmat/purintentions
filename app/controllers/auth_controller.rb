class AuthController < ApplicationController
    before_action :only_for_anonymous

    def new
    end

    def create
        session[:username] = params[:username]
        redirect_to_root_path
    end

    private

    def only_for_anonymous
        redirect_to_root_path if session[:username]
    end
end
