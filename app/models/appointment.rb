class Appointment < ApplicationRecord
  has_one :session, dependent: :destroy
  validates :date, :from, :to, presence: true
  after_create :set_day

  def set_day
    self.update(day: self.date.strftime('%A'))
  end
end
