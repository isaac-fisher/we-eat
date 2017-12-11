FactoryBot.define do

  # user factory without associated posts
  factory :restaurant do
    name { 'Victory Coffee' }
    address { 'Fire' }
    delivery_time { 30 }

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