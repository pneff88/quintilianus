class AddAboutmeToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :aboutme, :string
  end
end
