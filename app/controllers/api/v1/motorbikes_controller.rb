class Api::V1::MotorbikesController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_motorbike, only: %i[show destroy]

  def index
    @motorbikes = Motorbike.all
    render json: @motorbikes
  end

  def show
    render json: @motorbike
  end

  def destroy
    if @motorbike.destroy
      render json: { message: 'Motorbike deleted successfully' }, status: :ok
    else
      render json: { error: 'Failed to delete motorbike' }, status: :unprocessable_entity
    end
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

  def set_motorbike
    @motorbike = Motorbike.find(params[:id])
  rescue ActiveRecord::RecordNotFound => e
    render_404(e.message)
  end

  def render_404(message)
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404.html", layout: false, status: :not_found }
      format.json { render json: { error: message }, status: :not_found }
    end
  end

  def motorbike_params
    params.require(:motorbike).permit(:name, :model, :image, :price, :description)
  end
end
