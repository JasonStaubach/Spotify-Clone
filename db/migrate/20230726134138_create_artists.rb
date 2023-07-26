class CreateArtists < ActiveRecord::Migration[7.0]
  def change
    create_table :artists do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :bio
      t.boolean :verified, null: false

      t.timestamps
    end
  end
end
