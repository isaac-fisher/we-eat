require 'faker'

FactoryBot.define do
  factory :review do

    rating { Faker::Number.between(1, 3) }
    association :restaurant, factory: :restaurant

  end
end