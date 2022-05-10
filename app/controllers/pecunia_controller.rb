class PecuniaController < ApplicationController
    before_action :set_current_user

    def edit
        @user = Current.user
        if params[:denarii].to_i<61
            @user.pecunia = @user.pecunia + params[:denarii].to_i
        end
        p @user.pecunia
        @user.save
                render :json => {:denarii => @user.pecunia}

    end
end