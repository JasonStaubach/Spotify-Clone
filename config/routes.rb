Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do
      # ...
      get 'songs/search', to: "songs#search"
      resources :users, only: [:create]
      resource :session, only: [:create, :show, :destroy]
      resources :artists, only: [:show, :index]
      resources :songs, only: [:show]
  end

  get '*path', to: "static_pages#frontend_index"

end
