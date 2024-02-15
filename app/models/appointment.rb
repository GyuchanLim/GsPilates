class Appointment < ApplicationRecord
  has_one :session, dependent: :destroy

  validates :session, :date, :from, :to, presence: true
  after_create :set_day

  def get_date
    day.strftime('%D')
  end

  def set_day
    self.update(day: self.date.strftime('%A'))
  end
end
