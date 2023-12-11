class CreateReservations < ActiveRecord::Migration[7.1]
  def change
    create_table :reservations, &:timestamps
  end
end
