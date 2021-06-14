class AddLikesToPost < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :likes, :string
  end
end
