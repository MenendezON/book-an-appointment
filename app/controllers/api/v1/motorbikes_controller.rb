class Api::V1::MotorbikesController < ApplicationController
  before_action :set_motorbike, only: %i[show]

  def index
    @motorbikes = Motorbike.all
    render json: @motorbikes
  end

  def show
    render json: @motorbike
  end

  def new
    @motorbike = Motorbike.new
  end

  def create
    @motorbike = Motorbike.new(motorbike_params)

    if @motorbike.save
      render json: @motorbike, status: :created
    else
      render json: { errors: @motorbike.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def motorbike_params
    params.require(:motorbike).permit(:name, :model, :image, :price, :description)
  end

  def set_motorbike
    @motorbike = Motorbike.find(params[:id])
  end
end
