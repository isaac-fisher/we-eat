require 'rails_helper'
require 'faker'

describe Restaurant do

  it { should validate_presence_of(:name) }
  it { should have_many(:reviews) }
  it { should belong_to(:cuisine) }

  it { should allow_value('SomeString').for(:address) }
  it { should_not allow_value(Faker::Lovecraft.fhtagn(5)).for(:address) }

  it { should allow_value(60).for(:delivery_time) }
  it { should_not allow_value(5000).for(:delivery_time) }

  context 'When has multiple reviews' do
    ratings = [1,3,2,1]   #ratings for restaurant's reviews
    let!(:restaurant_w_reviews) { FactoryBot.create :restaurant_with_reviews, ratings: ratings}
    it 'Returns reviews average ratings' do
      expect(restaurant_w_reviews.rating).to eql(ratings.sum.fdiv(ratings.size))
    end
  end

  context 'When has no reviews' do
    let!(:restaurant) { FactoryBot.create :restaurant }
    it 'Returns nil for ratings' do
      expect(restaurant.rating).to be_nil
    end
  end


end
