class Client < ApplicationRecord
  # Belongs to relationships
  has_many :sessions

  validates :name, :email, :phone_number, presence: true
end
