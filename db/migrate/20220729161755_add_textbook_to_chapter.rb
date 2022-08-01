class AddTextbookToChapter < ActiveRecord::Migration[7.0]
  def change
    add_reference :chapters, :textbook, null: false, foreign_key: true
  end
end
