# spec/requests/api/v1/reservations_spec.rb

require 'rails_helper'

RSpec.describe 'Api::V1::ReservationsController', type: :request do
  describe 'GET /api/v1/reservations' do
    it 'returns a list of reservations for the authenticated user' do
      user = create(:user)
      reservation = create(:reservation, user:)

      token = user.generate_jwt(user)

      get '/api/v1/reservations', headers: { 'Authorization' => "Bearer #{token}" }

      expect(response).to have_http_status(:ok)
      expect(json_response[0]['id']).to eq(reservation.id)
    end
  end

  describe 'POST /api/v1/reservations' do
    it 'creates a new reservation for the authenticated user' do
      user = create(:user)
      motorbike = create(:motorbike)

      token = user.generate_jwt(user)

      reservation_params = { reservation: { date: Date.tomorrow, city: 'New City', motorbike_id: motorbike.id } }

      post '/api/v1/reservations', params: reservation_params, headers: { 'Authorization' => "Bearer #{token}" }

      expect(response).to have_http_status(:created)
      expect(json_response['user_id']).to eq(user.id)
    end
  end

  private

  def json_response
    JSON.parse(response.body)
  end

  def generate_jwt()
    JWT.encode({ id:, exp: 1.day.from_now.to_i, user_id: user.id }, Rails.application.secret_key_base)
  end
end
