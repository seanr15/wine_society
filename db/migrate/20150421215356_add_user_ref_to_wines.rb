class AddUserRefToWines < ActiveRecord::Migration
  def change
    add_reference :wines, :user, index: true
    add_foreign_key :wines, :users
  end
end
