class Chapter < ApplicationRecord
    belongs_to :textbook
    has_many :words
end
