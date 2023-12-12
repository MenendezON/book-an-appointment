class CreateReservations < ActiveRecord::Migration[7.1]
  create_table :reservations do |t|
    t.date :date
    t.string :city
    t.references :motorbike, null: false, foreign_key: true
    t.references :user, null: false, foreign_key: true
    t.timestamps
  end
end
