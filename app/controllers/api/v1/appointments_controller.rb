class Api::V1::AppointmentsController < ApplicationController
  before_action :set_appointment, only: %i[ show update destroy ]

  # GET /appointments
  def index
    @appointments = Appointment.order(day: :desc, from: :asc)

    render json: @appointments
  end

  # GET /appointments/1
  def show
    # sleep for 3 seconds
    if @appointment.session.nil?
      render json: { appointment: @appointment }.to_json
    else
      render json: { appointment: @appointment, session: @appointment.session }.to_json
    end
  end

  # POST /appointments
  def create
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created, location: api_v1_appointment_url(@appointment)
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def appointment_params
      params.require(:appointment).permit(:date, :from, :to, :message, :session)
    end
end
