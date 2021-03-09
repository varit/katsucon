class FavoritesController < ApplicationController
  before_action :set_favorite, only: [:update, :destroy]
  before_action :authorize_request, only: [:create]
  # GET /favorites
  def index
    @favorites = Favorite.all

    render json: @favorites
  end

  # GET /favorites/1
  def show
    # Get all favorites for user
    @thought = Thought.find(params[:id])
    # render json: {thought:@thought, favorites: @.thought.favorites}
    render json: @thought, include: {favorites: {include: :user}}
  end

  # POST /favorites
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.user = @current_user
    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.require(:favorite).permit(:user_id, :thought_id)
    end
end
