class Cuisine < ApplicationRecord
  validates :name,
          presence: true,
          length: { maximum: 15, minimum: 2 }

  validates :logo,
          presence: true
end
