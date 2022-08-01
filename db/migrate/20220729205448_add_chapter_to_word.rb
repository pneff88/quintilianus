class AddChapterToWord < ActiveRecord::Migration[7.0]
  def change
    add_reference :words, :word, null: true, foreign_key: true
  end
end
