class Reservation < ApplicationRecord
  belongs_to :motorbike
  belongs_to :user

  validates :date, presence: true
  validates :city, presence: true
  validates :motorbike, presence: true
  validates :user, presence: true
end
