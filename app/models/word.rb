class Word < ApplicationRecord
    validates :title, presence: true
    validates :meaning, presence: true
end
