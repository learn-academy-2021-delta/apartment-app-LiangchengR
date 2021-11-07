require 'rails_helper'

RSpec.describe "Apartments", type: :request do
   describe "GET /index" do
    it "retrieves list of apartments" do
      user = User.create :email => 'test@testing.com', :password => '123456', :password_confirmation => '123456'
      Apartment.create street:"6460 Convoy Ct SPACE 112", city:"Detroit", state:"MI", manager:"Tyler Thomas", email:"tthomas@test.com", price:600000, bedrooms:5, bathrooms:4, pets:"true", user_id: user.id

      get '/apartments'
      
      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1

    end
  end
end
