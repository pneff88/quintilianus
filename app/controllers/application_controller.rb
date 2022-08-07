class ApplicationController < ActionController::Base
    before_action :set_current_user
    before_action :log_out_expired

    def set_current_user
        if session[:user_id] 
            Current.user = User.find_by(id: session[:user_id])
        end
    end

    def log_out_expired
        if session[:expires_at]
            if session[:expires_at] < Time.current
                session.destroy
                redirect_to sign_in_path, alert: "Session expired."
            end
        end
    end

    def require_user_logged_in!
        if Current.user.nil?
            redirect_to sign_in_path, alert: "You must be signed in to do that."
        end
    end



end
