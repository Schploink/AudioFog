class Api::SessionsController < ApplicationController



  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user
      login(@user)
      # redirect_to
    else
      render json: ['Invalid username or password']
      # render 
    end
  end

  def destroy
    @user = current_user
    if @user 
      logout
      redirect_to 
    else
      render json: ["Not signed in"], status: 404
    end
  end


end
