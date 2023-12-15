# config/routes.rb
Rails.application.routes.draw do
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :motorbikes, only: %i[index create show]
      resources :reservations
      ressource :login
    end
  end

  # Redirect to the login page if not authenticated
  get '/login', to: 'main#index', constraints: ->(req) { req.session[:user_id].nil? }
  post '/login', to: 'users#authenticate' # Add a separate route for the login action

  # Defines the root path route ("/")
  root 'main#index'

  resources :motorbikes, only: %i[show]
end
