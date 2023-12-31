class Api::V1::AuthController < ApplicationController
  def login
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      token = user.generate_jwt(user)
      render json: { token:, user: }, status: :created
    else
      head :unauthorized
    end
  end
end
