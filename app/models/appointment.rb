class Appointment < ApplicationRecord
  belongs_to :session
  has_many :clients, :through => :sessions

  validates :date, :from, :to, presence: true
  after_create :set_day

  def get_date
    day.strftime('%D')
  end

  def set_day
    self.update(day: self.date.strftime('%A'))
  end
end
