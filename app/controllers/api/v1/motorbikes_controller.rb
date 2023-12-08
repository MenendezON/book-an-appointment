class Api::V1::MotorbikesController < ApplicationController
  before_action :set_motorbike, only: %i[show]

  def index
    @motorbikes = Motorbike.all
    render json: @motorbikes
  end

  def show
    render json: @motorbike
  end

  private

  def set_motorbike
    @motorbike = Motorbike.find(params[:id])
  end
end
