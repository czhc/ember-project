Rails.application.routes.draw do
  namespace :api do
    resources :hits
  end
end
