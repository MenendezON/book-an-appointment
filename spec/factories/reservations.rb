FactoryBot.define do
  factory :reservation do
    date { Date.today } # Adjust the default date as needed
    city { 'Dakar' } # Replace with a default city value
    association :motorbike, factory: :motorbike
    association :user, factory: :user
  end
end
