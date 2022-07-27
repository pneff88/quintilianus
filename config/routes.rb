Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  get "about", to: "about#index"

  get "faq", to: "faq#index"

  get "sign_up", to: "registrations#new"
  post "sign_up", to: "registrations#create"

  get "sign_in", to: "sessions#new"
  post "sign_in", to: "sessions#create"

  get "password", to: "passwords#edit", as: :edit_password
  patch "password", to: "passwords#update"

  delete "logout", to: "sessions#destroy"

  get "password/reset", to: "password_resets#new"
  post "password/reset", to: "password_resets#create"
  get "password/reset/edit", to: "password_resets#edit"
  patch "password/reset/edit", to: "password_resets#update"

  get "leaderboard", to: "leaderboard#index"

  get "wall", to: "wall#index"

  get "verble", to: "verble#index"

  get "vocabbuilder", to: "vocabbuilder#index"

  get "word", to: "word#index"
  get "word/new", to: "word#new"
  get "word/:id", to: "word#show"
  patch "/word/create", to: "word#create"
  delete "word/:id", to: "word#destroy"
  get "word/:id/edit", to: "word#edit"
  post "/word/:id/update", to: "word#update"

  post "pecunia", to: "pecunia#edit"

  root to: "main#index"

end
