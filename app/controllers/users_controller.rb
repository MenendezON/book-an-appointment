class UsersController < ApplicationController
  def authenticate
    name = params[:name]

    if name.blank?
      puts 'Name is blank. Authentication failed.'
      render json: { error: 'Name is required' }, status: :unprocessable_entity
      return
    end

    user = User.find_by(name:)

    if user
      # Authentication successful
      puts "Authentication successful for user: #{user.name}"
      render json: { message: 'Authentication successful' }, status: :ok
    else
      # Create a new user
      new_user = User.create(name:)

      if new_user.persisted?
        puts "User created and authenticated successfully for user: #{new_user.name}"
        render json: { message: 'User created and authenticated successfully' }, status: :ok
      else
        puts "Failed to create a new user for name: #{name}"
        render json: { error: 'Failed to create a new user' }, status: :unprocessable_entity
      end
    end
  end
end