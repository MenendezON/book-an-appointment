class Api::V1::MotorbikesController < ApplicationController
    before_action :set_motorbike, only: [:show, :update, :destroy]
  
    def index
      @motorbikes = Motorbike.all
      render json: @motorbikes
    end
  
    def show
      # Your code to fetch a specific motorbike
    end
  
    def create
      # Your code to create a new motorbike
    end
  
    def update
      # Your code to update a motorbike
    end
  
    def destroy
      # Your code to delete a motorbike
    end
  
    private
  
    def set_motorbike
      @motorbike = Motorbike.find(params[:id])
    end
  
end
