json.extract! restaurant, :id, :name, :card_acceptance, :address, :delivery_time, :cuisine_id, :rating, :created_at, :updated_at
json.url restaurant_url(restaurant, format: :json)
