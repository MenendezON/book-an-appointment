class SessionsController < Devise::SessionsController
  respond_to :json

  def create
    super do |resource|
      if resource.persisted?
        render json: {
          token: current_token,
          user: resource
        }
        return
      end
    end
  end

  private

  def current_token
    request.env['warden-jwt_auth.token']
  end
end
