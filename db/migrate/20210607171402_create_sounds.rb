class CreateSounds < ActiveRecord::Migration[5.2]
  def change
    create_table :sounds do |t|
      t.string :description, null: false
      t.integer :uploader_id, null: false, index: true

      t.timestamps
    end
  end
end
