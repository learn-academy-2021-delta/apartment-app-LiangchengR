require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  # creating a global user
  let(:user) do
    User.create :email => 'test@testing.com', :password => '123456', :password_confirmation => '123456'
  end

   describe "GET /index" do
    it "retrieves list of apartments" do
      Apartment.create street:"6460 Convoy Ct SPACE 112", city:"Detroit", state:"MI", manager:"Tyler Thomas", email:"tthomas@test.com", price:600000, bedrooms:5, bathrooms:4, pets:"true", user_id: user.id

      get '/apartments'
      
      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq 1

      apartment = apartments.first
      expect(apartment['street']).to eq "6460 Convoy Ct SPACE 112"
      expect(apartment['city']).to eq "Detroit"
      expect(apartment['state']).to eq "MI"
      expect(apartment['manager']).to eq "Tyler Thomas"
      expect(apartment['email']).to eq "tthomas@test.com"
      expect(apartment['price']).to eq "$600,000"
      expect(apartment['bedrooms']).to eq 5
      expect(apartment['bathrooms']).to eq 4
      expect(apartment['pets']).to eq "true"

    end
  end
end
