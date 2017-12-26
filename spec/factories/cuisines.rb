FactoryBot.define do
  factory :cuisine do
    id {1}
    name { Faker::Food.dish }
    logo { Faker::LoremPixel.image("60x60", true, 'food') }
  end
end
