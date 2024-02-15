class Session < ApplicationRecord
  # Belongs to relationships
  belongs_to :appointment
  has_many :client
  has_many :movement
end
