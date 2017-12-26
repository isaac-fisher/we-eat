# == Schema Information
#
# Table name: restaurants
#
#  id              :integer          not null, primary key
#  name            :string
#  card_acceptance :boolean
#  address         :string
#  delivery_time   :integer
#  cuisine_id      :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name,
          presence: true,
          uniqueness: true,
          length: { maximum: 45, minimum: 2, message: "Name length error" }

  validates :delivery_time,
          inclusion: { in: 5..1440, message: "Delivery time should be number of minutes"}

  validates :address,
          length: { maximum: 200, message: "Address max length reached" }

  belongs_to :cuisine
  has_many :reviews

  validates_associated :cuisine

  #evaluate rating by average of reviews
  def rating
    reviews.average(:rating)
  end
end
