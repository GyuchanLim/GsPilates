class Session < ApplicationRecord
  # Belongs to relationships
  has_one :appointment
  has_many :client
  has_many :movement
end
