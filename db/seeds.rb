# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartments = [
    {
        street:"8694 New Salem St UNIT 202", 
        city:"San Diego",
        state:"CA", 
        manager:"Vani Bobba",
        email:"vbob@test.com",
        price:"$515,000",
        bedrooms:2,
        bathrooms:2,
        pets: "true",
    },

    {
        street:"13312 Caminito Ciera UNIT 194", 
        city:"San Diego",
        state:"CA", 
        manager:"Diana Phan",
        email:"dphan@test.com",
        price:"$505,000",
        bedrooms:4,
        bathrooms:3,
        pets: "true"
    },

    {
        street:"6460 Convoy Ct SPACE 112", 
        city:"Detroit",
        state:"MI", 
        manager:"Tyler Thomas",
        email:"tthomas@test.com",
        price:"$600,000",
        bedrooms:5,
        bathrooms:4,
        pets: "true"
    }
]

user = User.first

apartments.each do |attributes|
    user.apartments.create attributes
    puts "creating apartment #{attributes}"
end

# user = User.create! :email => 'rebecca@testing.com', :password => '123456', :password_confirmation => '123456'

# user2 = User.create! :email => 'brian@testing.com', :password => '123456', :password_confirmation => '123456'

