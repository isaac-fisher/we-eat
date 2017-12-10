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
          length: { maximum: 15, minimum: 2 }

  validates :logo,
          presence: true
end
