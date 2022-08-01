class Textbook < ApplicationRecord
    has_many :chapters, dependent: :destroy
end
