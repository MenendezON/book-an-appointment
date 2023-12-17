# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "infos#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }

    trait :confirmed do
      confirmed_at { Time.current }
    end
  end
end
