require 'swagger_helper'

RSpec.describe 'api/v1/motorbikes', type: :request do
  path '/api/v1/motorbikes' do
    get('list motorbikes') do
      response(200, 'successful') do
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

    post('create motorbike') do
      consumes 'application/json'
      parameter name: :motorbike, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          model: { type: :string },
          image: { type: :string },
          price: { type: :number },
          description: { type: :string }
        },
        required: %w[name model price]
      }

      response(201, 'successful') do
        let(:motorbike) do
          {
            name: 'Example Motorbike',
            model: 'ABC123',
            image: 'motorbike.jpg',
            price: 10_000.0,
            description: 'A description of the motorbike.'
          }
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

  path '/api/v1/motorbikes/{id}' do
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show motorbike') do
      response(200, 'successful') do
        let(:id) { create(:motorbike).id }

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

    patch('update motorbike') do
      consumes 'application/json'
      parameter name: :motorbike, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          model: { type: :string },
          image: { type: :string },
          price: { type: :number },
          description: { type: :string }
        }
      }
    end

    put('update motorbike') do
      consumes 'application/json'
      parameter name: :motorbike, in: :body, schema: {
        type: :object,
        properties: {
          name: { type: :string },
          model: { type: :string },
          image: { type: :string },
          price: { type: :number },
          description: { type: :string }
        },
        required: %w[name model price]
      }
    end

    delete('delete motorbike') do
      response(200, 'successful') do
        let(:id) { create(:motorbike).id }

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
