class CreateAppointments < ActiveRecord::Migration[7.1]
  def change
    create_table :appointments do |t|
      t.string :customer
      t.datetime :day
      t.string :from
      t.string :to
      t.text :message

      t.timestamps
    end
  end
end
