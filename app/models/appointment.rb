class Appointment < ApplicationRecord
  has_one :session, dependent: :destroy
  validates :date, :from, :to, presence: true
  after_commit :set_day

  def set_day
    self.update_column(:day, self.date.strftime('%A'))
  end
end
