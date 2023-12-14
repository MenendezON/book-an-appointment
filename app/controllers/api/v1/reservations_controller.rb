# app/controllers/reservations_controller.rb
class Api::V1::ReservationsController < ApplicationController
  # before_action :authenticate_user!

  def index
    @reservations = Reservation.all
    render json:@reservations
  end

  def create
    @reservation = User.find(session[:user_id]).reservations.create(reservation_params)
    if @reservation.save
      redirect_to reservations_path, notice: 'Reservation was successfully created.' # Updated line
    else
      render :new
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:date, :city)
  end
end
