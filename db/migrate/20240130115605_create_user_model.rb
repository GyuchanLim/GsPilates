class CreateUserModel < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :password_digest
      t.string :recovery_password_digest

      t.timestamps
    end
  end
end