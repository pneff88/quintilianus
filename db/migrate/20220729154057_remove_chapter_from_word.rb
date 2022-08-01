class RemoveChapterFromWord < ActiveRecord::Migration[7.0]
  def change
    remove_column :words, :chapter, :string
  end
end
