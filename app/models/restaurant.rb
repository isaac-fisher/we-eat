class Restaurant < ApplicationRecord
  validates :name,
          presence: true,
          length: { maximum: 20, minimum: 2, message: "Name length error" }

  validates :rating,
          inclusion: { in: 0..3, message: "Rating should be 0..3"}

  validates :delivery_time,
          inclusion: { in: 0..1440, message: "Delivery time should be number of minutes"}

  validates :address,
          length: { maximum: 200, message: "Address max length reached" }

  belongs_to :cuisine

  validates_associated :cuisine
end
