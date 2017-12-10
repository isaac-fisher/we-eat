# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rating        :integer
#  comment       :string
#  reviewer_name :string
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  belongs_to :restaurant

  validates :rating,
    presence: true,
    inclusion: { in: 0..3, message: "Rating should be 0..3"}

end
