class SessionsController < ApplicationController
    def new
    end

    def create
        user = User.find_by(email: params[:email])
        if user.present? && user.authenticate(params[:password])
            session[:user_id]=user.id
            session[:expires_at] = Time.current + 30.minutes
            redirect_to root_path, notice: "Successfully logged in."
        else
            redirect_to sign_in_path, alert: "Invalid email or password."
        end
    end
    
    def destroy
        session[:user_id]=nil
        redirect_to root_path, notice: "Logged out."
    end 
end


