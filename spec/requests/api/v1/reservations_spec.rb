require 'rails_helper'
require 'jwt'

RSpec.describe 'Api::V1::ReservationsControllers', type: :request do
  before do
    post '/api/v1/users', params: {
      user: {
        username: 'motorbike_user',
        password: 'motorbike_user'
      }
    }
    
    parsed_response = JSON.parse(response.body)
    token = parsed_response['token']
    decoded_token = JWT.decode(token, nil, false)
    user_id = decoded_token[0]['user_id']

    puts user_id

    user = JSON.parse(parsed_response['token']).deep_symbolize_keys
    @current_user = user_id

    post '/api/v1/login', params: {
      auth: {
        username: 'motorbike_user',
        password: 'motorbike_user'
      }
    }
    auth = JSON.parse(response.body).deep_symbolize_keys
    @current_user = auth[:decoded_token]
    puts 'hhell'
  end

  describe 'GET /index' do
    it 'returns an array of reservations made by the current user' do
      get '/api/v1/reservations', headers: { Authorization: "Bearer #{@current_user}" }
      json = JSON.parse(response.body).deep_symbolize_keys
      expect(response.status).to eq(200)
      expect(json[:reservations]).to be_a(Array)
    end
  end

  describe 'GET /show' do
    context 'a valid request' do
      it 'shows a specific reservation made by the current user' do
        image = fixture_file_upload('app/assets/images/pizza meme.jpg', 'image/jpg')
        motorbike = Motorbike.create(name: 'motorbike', description: 'for respec testing', price_per_day: 10, image:)
        city = 'Tokyo'
        start_date = Date.new(2024, 12, 1)
        end_date = Date.new(2024, 12, 1)
        user_id = @current_user_id
        motorbike_id = motorbike.id
        reservation_cost = 501.99
        reservation = Reservation.new(city:, start_date:, end_date:, reservation_cost:, user_id:, motorbike_id:)
        reservation.save
        get "/api/v1/reservations/#{reservation.id}", headers: { Authorization: "Bearer #{@current_user}" }

        json = JSON.parse(response.body).deep_symbolize_keys
        expect(response.status).to eq(200)
        expect(json[:reservation][:city]).to eq('Tokyo')
        expect(json[:reservation][:start_date]).to eq('2024-12-01')
        expect(json[:reservation][:end_date]).to eq('2024-12-01')
        expect(json[:reservation][:reservation_cost]).to eq(501.99)
        expect(json[:reservation][:user_id]).to eq(@current_user_id)
        expect(json[:reservation][:motorbike_id]).to eq(motorbike.id)
      end
    end

    context 'an invalid request' do
      it 'returns an error message' do
        id = 1138
        get "/api/v1/reservations/#{id}", headers: { Authorization: "Bearer #{@current_user}" }

        expect(response.status).to eq(404)
      end
    end
  end

  describe 'POST /create' do
    context 'creating a reservation with valid parameters' do
      it 'creates a reservation' do
        image = fixture_file_upload('app/assets/images/pizza meme.jpg', 'image/jpg')
        motorbike = Motorbike.create(name: 'motorbike2', description: 'for respec testing', price_per_day: 10, image:)

        date = '2024-10-20'

        post '/api/v1/reservations', params: {
          motorbike: motorbike.id,
          date:,
          city:,
          reservation: {
            date:,
            end_date:,
            city: 'Copenhagen'
          }
        }, headers: { Authorization: "Bearer #{@current_user}" }

        json = JSON.parse(response.body).deep_symbolize_keys
        expect(response.status).to eq(201)
        expect(json[:success]).to eq('Reservation has been created.')
        expect(json[:reservation][:city]).to eq('Copenhagen')
        expect(json[:reservation][:date]).to eq('2024-10-20')
        expect(json[:reservation][:motorbike_id]).to eq(motorbike.id)
      end
    end

    # context 'creating a reservation with invalid parameters' do
    #   it 'returns an error' do
    #     image = fixture_file_upload('app/assets/images/pizza meme.jpg', 'image/jpg')
    #     motorbike = Motorbike.create(name: 'motorbike', description: 'for respec testing', price_per_day: 10, image:)

    #     date = '2024-10-20'

    #     post '/api/v1/reservations', params: {
    #       motorbike: motorbike.id,
    #       start_date:,
    #       end_date:,
    #       reservation: {
    #         start_date:,
    #         end_date:,
    #         city: ''
    #       }
    #     }, headers: { Authorization: "Bearer #{@current_user}" }

    #     expect(response.status).to eq(400)
    #   end
    # end

    # context 'creating a reservation without a motorbike id' do
    #   it 'returns satus 404' do
    #     post '/api/v1/reservations', params: {
    #       motorbike: '',
    #       reservation: {
    #         start_date: '2024-10-10',
    #         end_date: '2024-10-12',
    #         city: 'Copenhagen'
    #       }
    #     }, headers: { Authorization: "Bearer #{@current_user}" }

    #     expect(response.status).to eq(404)
    #   end
    # end
  end
end