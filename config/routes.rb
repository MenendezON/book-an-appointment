# config/routes.rb
Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    namespace :v1 do
      devise_for :users, controllers: { sessions: 'sessions' }
      resources :motorbikes, only: %i[index show create update destroy]
      resources :reservations, only: %i[index show create update destroy]
      post '/login', to: 'sessions#create'
    end
  end

  delete '/logout', to: 'sessions#destroy'

  root 'main#index'
end
