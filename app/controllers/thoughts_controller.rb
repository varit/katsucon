class ThoughtsController < ApplicationController
  before_action :set_thought, only: :show
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /thoughts
  def index
    @thoughts = Thought.all

    render json: @thoughts
  end

  # GET /thoughts/1
  def show
    render json: @thought
  end

  # POST /thoughts
  def create
    @thought = Thought.new(thought_params)
    @thought.user = @current_user
    if @thought.save
      render json: @thought, status: :created, location: @thought
    else
      render json: @thought.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /thoughts/1
  def update
    @thought = @current_user.thoughts.find(params[:id])
    if @thought.update(thought_params)
      render json: @thought
    else
      render json: @thought.errors, status: :unprocessable_entity
    end
  end
  
  # DELETE /thoughts/1
  def destroy
    @thought = @current_user.thoughts.find(params[:id])
    @thought.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thought
      @thought = Thought.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def thought_params
      params.require(:thought).permit(:comment)
    end
end
