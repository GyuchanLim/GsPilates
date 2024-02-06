class CreateClasses < ActiveRecord::Migration[7.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :session
      t.datetime :date
      t.string :day
      t.string :from
      t.string :to
      t.text :message

      t.timestamps
    end

    create_table :clients do |t|
      t.belongs_to :session
      t.string :name
      t.string :email
      t.string :phone_number
      t.text :note

      t.timestamps
    end

    create_table :movements do |t|
      t.belongs_to :session
      t.string :movement_name
      t.text :note

      t.timestamps
    end

    create_table :sessions do |t|
      t.string :note

      t.timestamps
    end
  end
end
