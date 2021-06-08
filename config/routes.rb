Rails.application.routes.draw do

  root to: "static_pages#root"

  namespace :api, defaults: {format: :jason} do
    resources :users, only: [ :create ]
    resources :sounds, only: [:create, :update, :index, :show, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
