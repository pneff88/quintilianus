class ChapterController < ApplicationController

    def index
    end

    def new
        @chapter = chapter.new
    end

    def show
        @chapter = Chapter.find(params[:id])
    end

    def create
        @chapter = Chapter.new(name: params[:chapter][:name])

        if @chapter.save
            redirect_to "/textbook"            
        else
            render status: :unprocessable_entity  
        end
    end

    def destroy
        @chapter = Chapter.find(params[:id])
        @chapter.destroy
        redirect_to '/textbook', status: :see_other

    end
end