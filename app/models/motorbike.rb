class Motorbike < ApplicationRecord
  has_many :reservations

  validates :name, presence: true
  validates :model, presence: true
  validates :image, presence: true
  validates :price, presence: true
  validates :description, presence: true
end
