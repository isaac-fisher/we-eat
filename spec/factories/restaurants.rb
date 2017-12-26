FactoryBot.define do

  # user factory without associated posts
  factory :restaurant do
    name { Faker::Food.spice }
    address { Faker::Address.street_address }
    delivery_time { Faker::Number.between(1, 1440) }

    association :cuisine, factory: :cuisine

    factory :restaurant_with_reviews do
      #ratings of reviews for this restaurant
      transient do
        ratings [1, 2]
      end

      after(:create) do |restaurant, evaluator|
        evaluator.ratings.each{ |r| create(:review, restaurant: restaurant, rating: r)}
      end
    end

  end
end