require 'rails_helper'

# Define a helper method to parse JSON response
def json
  JSON.parse(response.body)
end

RSpec.describe 'Api::V1::MotorbikesController', type: :controller do
  # Set up the controller instance before each example
  before do
    @controller = Api::V1::MotorbikesController.new
  end

  describe 'GET #index' do
    it 'returns a successful response' do
      get :index
      puts response.body
      puts response.status
      expect(response).to be_successful
    end

    it 'assigns @motorbikes with all motorbikes' do
      motorbike = FactoryBot.create(:motorbike)
      get :index
      puts "Assigns: #{assigns(:motorbikes)}"
      puts "Motorbikes in Database: #{Motorbike.all.inspect}"
      expect(assigns(:motorbikes)).to eq([motorbike])
    end
  end

  describe 'GET #show' do
    let(:motorbike) { FactoryBot.create(:motorbike) }

    it 'returns a successful response' do
      get :show, params: { id: motorbike.id }
      expect(response).to be_successful
    end

    it 'assigns @motorbike with the requested motorbike' do
      get :show, params: { id: motorbike.id }
      expect(assigns(:motorbike)).to eq(motorbike)
    end
  end

  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates a new motorbike' do
        expect do
          post :create, params: { motorbike: FactoryBot.attributes_for(:motorbike) }
        end.to change(Motorbike, :count).by(1)
      end

      it 'returns a created response' do
        post :create, params: { motorbike: FactoryBot.attributes_for(:motorbike) }
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid attributes' do
      it 'does not create a new motorbike' do
        expect do
          post :create, params: { motorbike: FactoryBot.attributes_for(:motorbike, name: nil) }
        end.to_not change(Motorbike, :count)
      end

      it 'returns an unprocessable entity response' do
        post :create, params: { motorbike: { name: nil, model: nil } }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE #destroy' do
    let!(:motorbike) { FactoryBot.create(:motorbike) }

    it 'deletes the motorbike' do
      expect do
        delete :destroy, params: { id: motorbike.id }
      end.to change(Motorbike, :count).by(-1)
    end

    it 'returns a successful response' do
      delete :destroy, params: { id: motorbike.id }
      expect(response).to have_http_status(:ok)
    end

    context 'when motorbike deletion fails' do
      before do
        allow_any_instance_of(Motorbike).to receive(:destroy).and_return(false)
      end

      it 'returns an unprocessable entity response' do
        delete :destroy, params: { id: motorbike.id }
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end
end
