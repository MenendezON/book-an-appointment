# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Motorbike.destroy_all

Motorbike.create!([{
  name: "Vespa",
  model: "GTS Super 300",
  image: "https://images.piaggio.com/vespa/vehicles/nvh1000u04/nvh1r7uu04/nvh1r7uu04-01-s.png"
  price: "123"
  description: "With its refreshed design, the Vespa GTS Super is raring to set off on adventures with you and provide thrills aplenty. Its sporting soul comes with the latest examples of technology incorporated in new and surprising ways. There’s much more to this family than a mere change of colour, with plenty of scope for each and every proud owner to express their own style and individuality."
},{
  name: "Vespa",
  model: "GTS 125",
  image: "https://images.piaggio.com/vespa/vehicles/nvh1000u03/nvh1q1tu03/nvh1q1tu03-01-s.png"
  price: "245"
  description: "With its refreshed design, the Vespa GTS Super is raring to set off on adventures with you and provide thrills aplenty. Its sporting soul comes with the latest examples of technology incorporated in new and surprising ways. There’s much more to this family than a mere change of colour, with plenty of scope for each and every proud owner to express their own style and individuality."
},{
  name: "Vespa",
  model: "Primavera 50",
  image: "https://images.piaggio.com/vespa/vehicles/nvf1000u01/nvf1dklu01/nvf1dklu01-01-s.png"
  price: "245"
  description: "With its refreshed design, the Vespa GTS Super is raring to set off on adventures with you and provide thrills aplenty. Its sporting soul comes with the latest examples of technology incorporated in new and surprising ways. There’s much more to this family than a mere change of colour, with plenty of scope for each and every proud owner to express their own style and individuality."
}])

p "Created #{Book.count} Books"