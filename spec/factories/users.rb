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

FactoryBot.define do
  factory :user do
    username { Faker::Internet.username }
    password { Faker::Internet.password(min_length: 6) }
  end

  factory :user_with_appointments, parent: :user do
    transient do
      appointments_count { 3 }
    end

    after(:create) do |user, evaluator|
      create_list(:appointment, evaluator.appointments_count, user:)
    end
  end
end
