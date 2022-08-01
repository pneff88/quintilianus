class AddChapterToWord < ActiveRecord::Migration[7.0]
  def change
    add_reference :words, :chapter, null: true, foreign_key: true
  end
end
