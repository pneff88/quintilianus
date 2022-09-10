class WordController < ApplicationController
    
    def index
        print(params[:pos]) 
    end

    def show
        @word = Word.find(params[:id])
    end

    def all
        @words = Word.all
        render :json => @words
    end

    def new
        if !Current.user || !Current.user.admin 
            redirect_to '/word', notice: "Only admins can do that."
        end

        @word = Word.new
    end

    def create
        @textbook = Textbook.find(params[:word][:textbook])     
        chap_id = -1
        @textbook.chapters.each do |c|
            if (c.name) == (params[:word][:chapter].to_i)
                chap_id = c.id
            end
        end
        @chapter = Chapter.find(chap_id)
        @word = Word.new(title: params[:word][:title], meaning: params[:word][:meaning], pos: params[:word][:pos], chapter_id: @chapter.id)
        if @word.save
            @chapter.words << @word
            redirect_to @word            
        else
            render :new, status: :unprocessable_entity  
        end
    end

    def edit    
        @word = Word.find(params[:id])
    end

    def update
        @word = Word.find(params[:id])

        if @word.update(title: params[:word][:title], meaning: params[:word][:meaning], pos: params[:word][:pos], chapter_id: params[:word][:chapter])
            redirect_to @word
        else
            render :edit, status: :unprocessable_entity
        end
    end

    def destroy
        @word = Word.find(params[:id])
        @word.destroy

        redirect_to word_path, status: :see_other

    end

    private
        def word_params
            params.require(:word).permit(:title, :meaning, :pos, :textbook, :chapter)
        end
    
end