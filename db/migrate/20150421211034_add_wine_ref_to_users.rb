class AddWineRefToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :wine, index: true
    add_foreign_key :users, :wines
  end

end
