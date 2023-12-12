# app/controllers/reservations_controller.rb
class ReservationsController < ApplicationController
  # before_action :authenticate_user!

  def my_reservations
    @reservations = User.find(session[:user_id]).reservations
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
