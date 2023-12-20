# spec/factories/users.rb
# FactoryBot.define do
#   factory :user do
#     sequence(:email) { |n| "infos#{n}@example.com" }
#     password { 'password' }
#     password_confirmation { 'password' }

#     trait :confirmed do
#       confirmed_at { Time.current }
#     end
#   end
# end
# spec/factories/users.rb

FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { Faker::Internet.password(min_length: 6) }
  end

  factory :user_with_reservations, parent: :user do
    transient do
      reservations_count { 3 }
    end

    after(:create) do |user, evaluator|
      create_list(:reservation, city, evaluator.reservations_count, user:)
    end
  end
end
