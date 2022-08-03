class TextbookController < ApplicationController

    def index
        @textbooks = Textbook.all
    end

    def new
        if !Current.user || !Current.user.admin 
            redirect_to '/textbook', notice: "Only admins can do that."
        end
        @textbook = Textbook.new
    end

    def show
        @textbook = Textbook.find(params[:id])
    end

    def create
        @textbook = Textbook.new(name: params[:textbook][:name])

        if @textbook.save
            redirect_to "/textbook"            
        else
            render :new, status: :unprocessable_entity  
        end
    end

    def destroy
        @textbook = Textbook.find(params[:id])
        @textbook.destroy
        redirect_to '/textbook', status: :see_other

    end
end