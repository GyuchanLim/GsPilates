class Api::V1::SessionsController < ApplicationController
  before_action :set_sessions, only: %i[ show update destroy ]

  # GET /sessions
  def index
    @sessions = Session.all

    render json: @sessions
  end

  # GET /sessions/1
  def show
    # sleep for 3 seconds
    sleep 3

    render json: @sessions
  end

  # POST /sessions
  def create
    @sessions = Session.new(sessions_params)

    if @sessions.save
      render json: @sessions, status: :created, location: @sessions
    else
      render json: @sessions.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sessions/1
  def update
    if @sessions.update(sessions_params)
      render json: @sessions
    else
      render json: @sessions.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sessions/1
  def destroy
    @sessions.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sessions
      @sessions = Session.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sessions_params
      params.require(:session).permit(:note)
    end
end
