Rails.application.routes.draw do
  # root 'hello_world#index'
  # get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'bye_world', to: 'hello_world#index'


  namespace :api do
    namespace :v1 do
      # resources :posts, only: [:create, :index, :show, :update, :destroy]
      resources :tests, only: [:create, :index, :show, :update, :destroy]

     
      resources :tests do
        member do
        get '/get_roles' => 'tests#get_roles'
        get '/get_mappings' => 'tests#get_mappings'        
        end
        
      end


    end
  end
  # get 'posts/:id', to: 'hello_world#index';
  get 'tests/:id', to: 'hello_world#index';
  root 'hello_world#index'

  # get 'posts/:id/edit', to: 'hello_world#index';
  get 'tests/:id/edit', to: 'hello_world#index';

  resources :test_import do
    collection {post :import}
  end

  resources :role
  resources :mapping

end
