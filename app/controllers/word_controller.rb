class WordController < ApplicationController
    
    def index
        print(params[:pos]) 
    end

    def show
        @word = Word.find(params[:id])
    end

    def new
        @word = Word.new
    end

    def create
        @textbook = Textbook.last
        Textbook.all.each do |t|
            if t.name == params[:word][:textbook]
                @textbook = Textbook.find(id=t.id)
            end
        end
        @chapter = @textbook.chapters[0]
        @textbook.chapters.each do |c|
            if c.name == params[:chapter]
                @chapter = Chapter.find(c.id)
            end
        end
        @word = Word.new(title: params[:word][:title], meaning: params[:word][:meaning], pos: params[:word][:pos], chapter_id: @chapter.id)
        @word.save
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

        if @word.update(word_params)
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