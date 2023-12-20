# config/routes.rb
Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :motorbikes, only: %i[index show create destroy]
      resources :reservations, only: %i[index create] do
        collection do
          get ':id', action: :show
        end
      end
      post '/login', to: 'auth#login'
    end
  end

  root 'main#index'
end
