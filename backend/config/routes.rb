Rails.application.routes.draw do
  get '/auto-login' => "session#auto_login"
  post '/session' => "session#login"
  resources :users
  resources :posts
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
