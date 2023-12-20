class CreateMotorbikes < ActiveRecord::Migration[7.1]
  def change
    create_table :motorbikes do |t|
      t.string :name
      t.string :model
      t.string :image
      t.integer :price
      t.text :description

      t.timestamps
    end
  end
end
