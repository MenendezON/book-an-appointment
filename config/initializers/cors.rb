# config/initializers/cors.rb

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3000', '127.0.0.1:3000', '[::1]:3000' # Update with your React app's URL
    resource '*',
             headers: :any,
             methods: %i[get post put patch delete options head]
  end
end
