class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_reservation, only: %i[show]

  def index
    @reservations = Reservation.includes(:motorbike, :user).where(user_id: current_user.id)
    render json: @reservations.to_json(include: { motorbike: {}, user: {} })
  end

  def show
    render json: @reservation.to_json(include: { motorbike: {}, user: {} })
  end

  def new
    @reservation = Reservation.new
  end

  def create
    @reservation = Reservation.new(reservation_params)
    @reservation.user = current_user

    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  private

  def set_reservation
    @reservation = Reservation.includes(:motorbike, :user).find_by(id: params[:id], user_id: current_user.id)
    render_404('Reservation not found or does not belong to the specified user') unless @reservation
  end

  def render_404(message)
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404.html", layout: false, status: :not_found }
      format.json { render json: { error: message }, status: :not_found }
    end
  end

  def reservation_params
    params.require(:reservation).permit(:date, :city, :motorbike_id)
  end
end
