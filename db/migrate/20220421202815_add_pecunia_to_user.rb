class AddPecuniaToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :pecunia, :integer
  end
end
