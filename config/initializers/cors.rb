# config/application.rb or config/initializers/cors.rb
config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://127.0.0.1:3000' # Replace with the actual URL of your React app
    resource '/api/v1/motorbikes', headers: :any, methods: %i[get post put patch delete options head]
  end
end
