class Api::UsersController < ApplicationController

  def index 
    @users = User.all
  end
  
  def show
      @user = User.find(params[:id])
      if @user
          render :show
      else
          render json: ['User does not exist'], status: 422
      end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
      # render :new
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
