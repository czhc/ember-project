class Api::HitsController < ApplicationController
  def index
    @hits = Hit.all
    render json: @hits
  end

  def show
    @hit = Hit.find(params[:id])
    render json: @hit
  end
end
