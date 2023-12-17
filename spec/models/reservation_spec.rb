require 'rails_helper'

RSpec.describe Reservation, type: :model do
  let(:motorbike) { create(:motorbike) } # Assuming you have a Motorbike factory
  let(:user) { create(:user) } # Assuming you have a User factory

  describe 'validations' do
    it { should validate_presence_of(:date) }
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:motorbike) }
    it { should validate_presence_of(:user) }
  end

  describe 'associations' do
    it { should belong_to(:motorbike) }
    it { should belong_to(:user) }
  end
end
