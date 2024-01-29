class Appointment < ApplicationRecord
  # Belongs to relationships

  validates :customer, :day, :from, :to, presence: true

  def get_date
    day.strftime('%D')
  end
end
