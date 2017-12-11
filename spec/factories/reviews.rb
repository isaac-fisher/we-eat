FactoryBot.define do
  factory :review do

    rating { 2 }
    association :restaurant, factory: :restaurant

  end
end