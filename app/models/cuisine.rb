# == Schema Information
#
# Table name: cuisines
#
#  id         :integer          not null, primary key
#  name       :string
#  logo       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Cuisine < ApplicationRecord
  validates :name,
          uniqueness: true,
          presence: true,
          length: { maximum: 25, minimum: 2, message: "Name length error" }

  validates :logo,
          presence: true
end
