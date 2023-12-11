# app/controllers/reservations_controller.rb
class ReservationsController < ApplicationController
  before_action :authenticate_user!

  def my_reservations
    @reservations = current_user.reservations
  end

  def create
    @reservation = current_user.reservations.create(reservation_params)
    if @reservation.save
      redirect_to my_reservations_path, notice: 'Reservation was successfully created.'
    else
      render :new
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:date, :city)
  end
end
