require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  # creating a global user
  let(:user) do
    User.create :email => 'test@testing.com', :password => '123456', :password_confirmation => '123456'
  end

   describe "GET /index" do
    it "retrieves list of apartments" do
      Apartment.create street:"6460 Convoy Ct SPACE 112", city:"Detroit", state:"MI", manager:"Tyler Thomas", email:"tthomas@test.com", price:"$600,000", bedrooms:5, bathrooms:4, pets:"true", user_id: user.id

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

  describe "POST /create" do
    it "creates an apartment" do
      

      current_user= {
          id: 2, 
          email: 'user@testing.com', 
          created_at: '2021-11-10T03:18:36.360Z', 
          updated_at: '2021-11-10T05:19:50.194Z'
        }

      ap_params = {
        apartment: {
          street: "1895 Golden St UNIT 2",
          city: "Tampa",
          state: "FL",
          manager: "Jenna Smith",
          email: "jsmith@test.com",
          price: "$1,000",
          bedrooms: 2,
          bathrooms: 2,
          pets: "true",
          
        }
      }

      post '/apartments', params: ap_params
      
      expect(response).to have_http_status(200)
      apartment = Apartment.first
      expect(apartment['street']).to eq "1895 Golden St UNIT 2"
      expect(apartment['city']).to eq "Tampa"
      expect(apartment['state']).to eq "FL"
      expect(apartment['manager']).to eq "Jenna Smith"
      expect(apartment['email']).to eq "jsmith@test.com"
      expect(apartment['price']).to eq "$1,000"
      expect(apartment['bedrooms']).to eq 2
      expect(apartment['bathrooms']).to eq 2
      expect(apartment['pets']).to eq "true"
    end
  end

  
end
