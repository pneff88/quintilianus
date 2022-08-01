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
        @textbook = Textbook.find(params[:chapter][:textbook_id])
        @chapter = Chapter.new(name: params[:chapter][:name], textbook_id: @textbook.id)
        if @chapter.save
            @textbook.chapters << @chapter
        end
        redirect_to "/textbook"    
    end

    def destroy
        @chapter = Chapter.find(params[:id])
        @chapter.destroy
        redirect_to '/textbook', status: :see_other

    end
end