
class ApartmentsController < ApplicationController
    
    def set_current_user
      User.current = current_user
    end

    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(ap_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    def update
        apartment = Apartment.find(params[:id])
        apartment.update(ap_params)
        if apartment.valid?
            render json: apartment
        else 
            render json: apartment.errors, status: 422
        end
    end

    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json: apartment
    end

    private
    def ap_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end
end
