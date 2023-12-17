require 'swagger_helper'

RSpec.describe 'api/v1/users', type: :request do
  let(:user_params) do
    {
      user: {
        email: 'menendezon@gmail.com',
        password: 'password'
      }
    }
  end

  path '/api/v1/users' do
    post('create user') do
      consumes 'application/json'
      parameter name: :user_params, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: { email: { type: :string }, password: { type: :string } },
            required: %w[email password]
          }
        },
        required: ['user']
      }

      response '201', 'user created' do
        before do
          post '/api/v1/users', params: user_params.to_json, headers: { 'Content-Type' => 'application/json' }
        end

        it 'returns a 201 response' do
          expect(response).to have_http_status(201)
        end

        it 'returns the token in the response' do
          json_response = JSON.parse(response.body)
          # Adjust this expectation based on the actual structure of the response
          expect(json_response).to include('token')
        end
      end

      response '422', 'unprocessable entity' do
        # Adjust this block as needed
        let(:user_params) do
          {
            user: {
              email: nil,
              password: nil
            }
          }
        end

        run_test!
      end
    end
  end
end
