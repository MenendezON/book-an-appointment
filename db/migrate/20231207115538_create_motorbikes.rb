class CreateMotorbikes < ActiveRecord::Migration[7.1]
  def change
    create_table :motorbikes do |t|
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
