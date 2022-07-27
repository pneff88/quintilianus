class CreateWords < ActiveRecord::Migration[7.0]
  def change
    create_table :words do |t|
      t.string :title
      t.string :meaning
      t.string :pos
      t.string :textbook
      t.integer :chapter

      t.timestamps
    end
  end
end
