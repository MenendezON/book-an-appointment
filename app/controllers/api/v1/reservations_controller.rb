class Api::V1::ReservationsController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  before_action :set_reservation, only: %i[show destroy]

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

  def destroy
    if @reservation.destroy
      render json: { message: 'Reservation deleted successfully' }, status: :ok
    else
      render json: { error: 'Failed to delete reservation' }, status: :unprocessable_entity
    end
  end

  private

  def set_reservation
    @reservation = Reservation.includes(:motorbike, :user).find_by(id: params[:id], user_id: current_user.id)
    return unless @reservation.nil?

    render json: { error: 'Reservation not found or does not belong to the specified user' }, status: :not_found
  end

  def reservation_params
    params.require(:reservation).permit(:date, :city, :motorbike_id)
  end
end
