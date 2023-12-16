class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    user_id = current_user.id
    render json: { user_id: }
  end
end
