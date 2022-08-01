class Word < ApplicationRecord
    validates :title, presence: true
    validates :meaning, presence: true
    belongs_to :chapter, optional: true
end
