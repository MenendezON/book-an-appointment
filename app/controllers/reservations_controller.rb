def my_reservations
  @reservations = current_user.reservations
end
