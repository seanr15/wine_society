class CreateWines < ActiveRecord::Migration
  def change
    create_table :wines do |t|
      t.string :name
      t.string :varietal
      t.string :winery
      t.string :url

      t.timestamps null: false
    end
  end
end
