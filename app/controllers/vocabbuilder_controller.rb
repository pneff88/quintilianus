class VocabbuilderController < ApplicationController
    def index
    end

    def returnWordParams
        text = null
        chap = null
        if session[:word_params]
            Textbook.all do |t|
                if t.name == session[:word_params].textbook
                text = t
                end
            end
            t.chapters.all do |c|
                if c.name == session[:word_params].name.to_i
                chap = c
                end
            end
        end
        session[:chapID] = chap.id
        puts "vaira", session[:chapID]
    end

end