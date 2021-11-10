
class ApartmentsController < ApplicationController
    

    def set_current_user
      User.current = current_user
    end

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = current_user.apartments.create(ap_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    private
    def ap_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
    end
end
