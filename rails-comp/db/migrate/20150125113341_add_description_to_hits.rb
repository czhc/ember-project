class AddDescriptionToHits < ActiveRecord::Migration
  def change
    add_column :hits, :description, :text
  end
end
