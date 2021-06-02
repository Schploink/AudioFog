Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :jason} do
    resources :users, only: [ :create ]
    resource :session, only: [:create, :destroy]
  end
end