class RemoveTextbookFromWord < ActiveRecord::Migration[7.0]
  def change
    remove_column :words, :textbook, :string
  end
end
