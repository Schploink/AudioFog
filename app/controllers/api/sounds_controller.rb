class Api::SoundsController < ApplicationController
  def index
    @sounds = Sound.all
    # render json: @sounds
  end

  def show
    @sound = Sound.find(params(:id))
      if @sound
        render 'api/sounds/show'
      else
        render json: ("Could not find sound"), status: 404
      end
  end

  def create
    @sound = Sound.new(sound_params)
    @sound.uploader_id = current_user.id

    if @sound.save
      render :show
    else
      render json: @sound.errors.full_messages, status: 400
    end
  end

  def update
    @sound = Sound.find_by(id: params[:id])
    if @sound && @sound.update(sound_params)
      render :show
    else
      render json: @sound.errors.full_messages, status: 400
    end
  end

  def destroy
    @sound = Sound.find_by(id: params[:id])
    @sound.destroy!
  end

  def sounds_params
    params.require(:sound).permit(:description, :uploader_id)
  end
end
