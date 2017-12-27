require 'rails_helper'


describe RestaurantsController do

  ratings = [1,3,2,1]   #ratings for restaurant's reviews
  let!(:restaurant) { FactoryBot.create :restaurant_with_reviews, ratings: ratings}

  describe "GET #show" do
    before do
      get :show, params: { id: restaurant.id }
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    # TODO: use JSON.parse symbolize_names: true
    it "response with JSON body containing expected Restaurant attributes" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body).with_indifferent_access }.not_to raise_exception
      expect(hash_body.symbolize_keys).to include(
        id: restaurant.id,
        cuisine_id: restaurant.cuisine_id,
        address: restaurant.address,
        name: restaurant.name,
        card_acceptance: restaurant.card_acceptance ,
        delivery_time: restaurant.delivery_time,
        rating: ratings.sum.fdiv(ratings.size).to_f.to_s
      )
    end
  end

  describe "GET #index" do
    before do
      get :index
    end

    it "returns http success" do
      expect(response).to have_http_status(:success)
    end

    it "response with JSON body containing expected Restaurant attributes" do
      hash_body = nil
      expect { hash_body = JSON.parse(response.body) }.not_to raise_exception
      expect(hash_body.size).to be(1)
      expect(hash_body.first.symbolize_keys).to include(
          id: restaurant.id,
          cuisine_id: restaurant.cuisine_id,
          address: restaurant.address,
          name: restaurant.name,
          card_acceptance: restaurant.card_acceptance ,
          delivery_time: restaurant.delivery_time,
          rating: ratings.sum.fdiv(ratings.size).to_f.to_s
      )
    end
  end
end
