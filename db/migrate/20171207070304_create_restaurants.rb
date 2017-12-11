class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.boolean :card_acceptance
      t.string :address
      t.integer :delivery_time
      t.references :cuisine, foreign_key: true
      t.integer :rating

      t.timestamps
    end
  end
end
