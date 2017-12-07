class RemoveRatingFromRestaurant < ActiveRecord::Migration[5.1]
  def change
    remove_column :restaurants, :rating, :integer
  end
end
