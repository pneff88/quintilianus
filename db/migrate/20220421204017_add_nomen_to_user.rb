class AddNomenToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :nomen, :string
  end
end
