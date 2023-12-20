require 'rails_helper'

RSpec.describe Reservation, type: :model do
  describe 'validations' do
    it 'should be valid with valid credentials' do
      reservation = FactoryBot.create(:reservation)
      expect(reservation).to be_valid
    end

    it 'is not valid without an reservation time' do
      reservation = Reservation.new(date: nil)
      expect(reservation).to_not be_valid
    end
  end

  describe 'associations' do
    it 'should belong to a user' do
      association = described_class.reflect_on_association(:user)
      expect(association.macro).to eq :belongs_to
    end

    it 'should belong to a motorbike' do
      association = described_class.reflect_on_association(:motorbike)
      expect(association.macro).to eq :belongs_to
    end
  end
end