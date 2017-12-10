class Restaurant < ApplicationRecord
  validates :name,
          presence: true,
          length: { maximum: 20, minimum: 2, message: "Name length error" }

  validates :delivery_time,
          inclusion: { in: 0..1440, message: "Delivery time should be number of minutes"}

  validates :address,
          length: { maximum: 200, message: "Address max length reached" }

  belongs_to :cuisine
  has_many :reviews

  validates_associated :cuisine
end
