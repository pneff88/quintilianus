class PecuniaController < ApplicationController
    before_action :set_current_user
    skip_before_action :verify_authenticity_token

    def edit
        @user = Current.user
        
        p request.body
        # if params[:denarii].to_i<61
        @user.pecunia = @user.pecunia + params[:points]
        # end
        # p @user.pecunia
        @user.save
        render :json => {}
        
    end
end