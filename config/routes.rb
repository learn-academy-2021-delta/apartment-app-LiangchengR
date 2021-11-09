Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  
  # separate the Rails routing responsibilities, and the React routing responsibilities 
  # directs all HTML traffic to the 'home#index' route, but ignores non HTML traffic, like our API requests
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  # get '/apartments' => 'apartments#index'
  # route the index.html.erb page to root
  root 'home#index'
end
