class CreateChapters < ActiveRecord::Migration[7.0]
  def change
    create_table :chapters do |t|
      t.integer :name

      t.timestamps
    end
  end
end
