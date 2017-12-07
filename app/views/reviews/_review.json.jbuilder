json.extract! review, :id, :rating, :comment, :reviewer_name, :restaurant_id, :created_at, :updated_at
json.url review_url(review, format: :json)
