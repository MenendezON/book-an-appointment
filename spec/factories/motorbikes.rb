# spec/factories/motorbikes.rb
FactoryBot.define do
  factory :motorbike do
    name { 'Kawasaki' }
    model { 'Ninja 650' }
    image { 'https://content2.kawasaki.com/ContentStorage/KMC/Products/9027/e2299103-4d3b-4bd6-96b9-4b9e505ec64b.png' }
    price { '1000.0' }
    description { 'A great motorbike for your adventures.' }
  end
end
