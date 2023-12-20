require 'rails_helper'

RSpec.describe Motorbike, type: :model do
  describe 'validations' do
    it 'is valid with valid attributes' do
      motorbike = Motorbike.new(name: 'Example Motorbike', model: 'Example Brand', image: 'https://content2.kawasaki.com/ContentStorage/KMC/Products/9027/e2299103-4d3b-4bd6-96b9-4b9e505ec64b.png', price: '1200', description: 'Text for the description')
      expect(motorbike).to be_valid
    end

    it 'is not valid without a name, image, price, and description' do
      motorbike = Motorbike.new(model: 'Example Brand')
      expect(motorbike).not_to be_valid
    end

    it 'is not valid without a brand' do
      motorbike = Motorbike.new(name: 'Example Motorbike')
      expect(motorbike).not_to be_valid
    end
  end

  describe 'associations' do
    it 'can have many reservations' do
      motorbike = Motorbike.new(name: 'Example Motorbike', model: 'Example Brand', image: 'https://content2.kawasaki.com/ContentStorage/KMC/Products/9027/e2299103-4d3b-4bd6-96b9-4b9e505ec64b.png', price: '1200', description: 'Text for the description')
      reservation1 = motorbike.reservations.build(date: Time.now)
      reservation2 = motorbike.reservations.build(date: Time.now + 1.day)

      expect(motorbike.reservations).to include(reservation1, reservation2)
    end
  end
end
