require 'rails_helper'

# Define a helper method to parse JSON response
def json
  JSON.parse(response.body)
end

RSpec.describe 'Api::V1::ReservationsController', type: :controller do
  let(:user) { create(:user) }
  let(:motorbike) { create(:motorbike) }

  before do
    sign_in(user)
    @controller = Api::V1::ReservationsController.new
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      puts response.body
      puts response.status
      expect(response).to be_successful
    end
  end

  describe 'GET #show' do
    let(:reservation) { create(:reservation, user:) } # Assuming you have a Reservation factory

    it 'returns a successful response' do
      get :show, params: { id: reservation.id }
      expect(response).to be_successful
    end
  end

  describe 'POST #create' do
    it 'creates a new reservation' do
      reservation_params = { date: '2023-01-01', city: 'Example City', motorbike_id: motorbike.id }
      post :create, params: { reservation: reservation_params }
      expect(response).to have_http_status(:created)
    end

    it 'does not create a reservation with invalid params' do
      post :create, params: { reservation: { date: '', city: '', motorbike_id: nil } }
      expect(response).to have_http_status(:unprocessable_entity)
    end
  end

  describe 'DELETE #destroy' do
    let(:reservation) { create(:reservation, motorbike:, user:) }

    it 'deletes the reservation' do
      expect do
        delete :destroy, params: { id: reservation.id }
      end.to change(Reservation, :count).by(-1)
    end

    it 'returns a successful response' do
      delete :destroy, params: { id: reservation.id }
      expect(response).to have_http_status(:ok)
    end

    context 'when reservation deletion fails' do
      before do
        allow_any_instance_of(Reservation).to receive(:destroy).and_return(false)
      end

      it 'returns an unprocessable entity response' do
        delete :destroy, params: { id: reservation.id }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
