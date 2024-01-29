class Api::V1::AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[ show ]

  def index
    @appointments = Appointment.order(created_at: :desc)

    render json: @appointments
  end

  def show
    sleep 3
    render json: @appointment
  end
  
  private
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end
end