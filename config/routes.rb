Rails.application.routes.draw do

  resources :messages
  root 'chat#index'

end
