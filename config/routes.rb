# config/routes.rb
Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :motorbikes, only: %i[index create show destroy]
      resources :reservations, only: %i[index create show destroy]
    end
  end

  # Defines the root path route ("/")
  root 'main#index'

  # resources :motorbikes, only: %i[show]
end
