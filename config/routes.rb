Rails.application.routes.draw do
  root 'pages#home'
  resources :messages, only: [:create, :destroy]
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
end
