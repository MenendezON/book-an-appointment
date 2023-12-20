require 'rails_helper'

# Define a helper method to parse JSON response
def json
  JSON.parse(response.body)
end

RSpec.describe 'Api::V1::ReservationsController', type: :controller do
  let(:user) { create(:user) }
  let(:motorbike) { create(:motorbike) }
  let(:token) { user.generate_jwt(user) }

  before do 
    request.headers['Authorization'] = "Bearer #{token}" 
    sign_in(user)
    @controller = Api::V1::ReservationsController.new
  end

  describe 'GET #index' do
    it 'returns a list of user reservations' do
      create_list(:reservation, 3, user:)
      get :index
      expect(response).to have_http_status(:ok)
      expect(JSON.parse(response.body).count).to eq(3)
    end
  end

  

  describe 'POST #create' do
    context 'with valid parameters' do
      let(:motorbike) { create(:motorbike) }

      it 'creates a new reservation' do
        post :create, params: { reservation: { date: DateTime.now, city: 'Dakar', motorbike_id: motorbike.id } }
        expect(response).to have_http_status(:created)
        expect(Reservation.count).to eq(1)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a new reservation and returns unprocessable_entity status' do
        post :create, params: { reservation: { date: nil, city: 'Abuja', motorbike_id: nil } }
        expect(response).to have_http_status(:unprocessable_entity)
      end

      it 'returns error messages in the response' do
        post :create, params: { reservation: { date: nil, city: 'Bamako', motorbike_id: nil } }
        errors = JSON.parse(response.body)['errors']
        expect(errors).to be_an(Array)
        expect(errors).to include("Reservation time can't be blank")
        expect(errors).to include('Motorbike must exist')
      end
    end
  end
end
