class CreateHits < ActiveRecord::Migration
  def change
    create_table :hits do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
