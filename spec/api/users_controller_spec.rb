# spec/api/users_controller_spec.rb

require 'rails_helper'

RSpec.describe Api::UsersController, type: :request do
  describe 'POST /login' do
    let(:user) { create(:user, email: 'menendezon@gmail.com', password: '123456789') }

    it 'authenticates the user and returns a JWT token' do
      post '/login', params: { user: { email: user.email, password: '123456789' } }

      expect(response).to have_http_status(:success)
      expect(response).to match_response_schema('auth_token') # You may need to use a gem like `json-schema` for this
    end

    it 'returns an error for invalid credentials' do
      post '/login', params: { user: { email: 'menendezon@gmail.com', password: 'wrong_password' } }

      expect(response).to have_http_status(:unauthorized)
    end
  end
end
