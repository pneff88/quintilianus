class RemoveWordFromWord < ActiveRecord::Migration[7.0]
  def change
    remove_reference :words, :word, null: false, foreign_key: true
  end
end
