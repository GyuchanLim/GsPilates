class Movement < ApplicationRecord
  # Belongs to relationships
  has_many :sessions

  validates :movement_name, presence: true
end
