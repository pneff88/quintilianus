class PecuniaController < ApplicationController
    before_action :set_current_user

    def edit
        @user = Current.user
        @user.pecunia = @user.pecunia + params[:denarii].to_i
        p @user.pecunia
        @user.save
                render :json => {:denarii => @user.pecunia}

    end
end