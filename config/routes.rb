Rails.application.routes.draw do
  namespace :api do
    get 'sounds/index'
    get 'sounds/show'
    get 'sounds/create'
    get 'sounds/update'
    get 'sounds/destroy'
  end
  root to: "static_pages#root"

  namespace :api, defaults: {format: :jason} do
    resources :users, only: [ :create ]
    resource :session, only: [:create, :destroy]
  end
end
