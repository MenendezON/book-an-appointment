require 'swagger_helper'

RSpec.describe 'api/v1/reservations', type: :request do
  let(:user) { create(:user) }
  let(:motorbike) { create(:motorbike) }

  let(:reservation) do
    {
      date: '2023-12-31',
      city: 'Example City',
      motorbike_id: motorbike.id
    }
  end

  path '/api/v1/reservations' do
    post('create reservation') do
      consumes 'application/json'
      parameter name: :reservation, in: :body, schema: {
        type: :object,
        properties: {
          date: { type: :string, format: :date },
          city: { type: :string },
          motorbike_id: { type: :integer },
          user_id: { type: :integer }
        },
        required: %w[date city motorbike_id]
      }

      response(201, 'successful') do
        let(:valid_reservation_params) do
          {
            date: '2023-12-31',
            city: 'Example City',
            motorbike_id: motorbike.id
          }
        end

        run_test! do |response|
          # Check if the response body is not empty before attempting to parse JSON
          unless response.body.blank?
            # Optionally, add additional assertions based on the expected response structure
            JSON.parse(response.body, symbolize_names: true)
            # Example: expect(parsed_response[:key]).to eq(expected_value)
          end
        end
      end
    end

    # post('create motorbike') do
    #   consumes 'application/json'
    #   parameter name: :motorbike, in: :body, schema: {
    #     type: :object,
    #     properties: {
    #       name: { type: :string },
    #       model: { type: :string },
    #       image: { type: :string },
    #       price: { type: :number },
    #       description: { type: :string }
    #     },
    #     required: ['name', 'model', 'price']
    #   }

    # end

    get('list reservations') do
      response(200, 'successful') do
        before do
          create_list(:reservation, 3, user:, motorbike:)
          sign_in user
          get '/api/v1/reservations'
        end

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/reservations/{id}' do
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show reservation') do
      response(200, 'successful') do
        let(:reservation) { create(:reservation, user:, motorbike:) }
        let(:id) { reservation.id }

        before do
          sign_in user
          get "/api/v1/reservations/#{reservation.id}"
        end

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end

      response(404, 'not found') do
        let(:id) { 'nonexistent_id' }
        before do
          sign_in user
          get "/api/v1/reservations/#{id}"
        end

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
