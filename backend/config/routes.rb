Rails.application.routes.draw do
  get '/auto-login' => "session#auto_login"
  post '/session' => "session#login"
  resources :users, only: :create
  resources :posts, only: [:index, :show, :create, :update]
  resources :comments, only: [:index, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
