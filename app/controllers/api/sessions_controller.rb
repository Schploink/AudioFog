class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if user
      login(user)
      redirect_to poems_url
    else
      flash[:errors] = ['Invalid username or password']
      # render 
    end
  end

  def destroy

  end


end
