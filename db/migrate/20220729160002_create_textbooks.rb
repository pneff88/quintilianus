class CreateTextbooks < ActiveRecord::Migration[7.0]
  def change
    create_table :textbooks do |t|
      t.string :name

      t.timestamps
    end
  end
end
