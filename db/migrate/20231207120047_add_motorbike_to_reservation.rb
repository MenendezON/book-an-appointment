class AddMotorbikeToReservation < ActiveRecord::Migration[7.1]
  def change
    add_reference :reservations, :motorbikes, null: false, foreign_key: true
  end
end
