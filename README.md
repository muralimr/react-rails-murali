# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



As Discussed, please find the below coding assignment and request you to share this on 15th Jul’20(Wednesday) by first half.

Here is a Coding assignment. 

Assignment: Create a RoR application

Page 1: Imports the attached CSV to a PostGreSQL tables as
Mapping (master Table: refer to distinct data from “mapping” column)
Role (master table: refer to distinct data from “role” column)

Questions (Data mapped from CSV)
Page 2: Create a Single page application using React that render the records in PostGres table (allow pagination, show 10 rows one page)
Page 2 grid should allow CRUD operations
Writing API to perform all operations except import CSV is expected in this assignment.
End of the assignment

Push the code to Github 
Deploy the code to Heroku (send us the valid URL to test the assignment)
Get back to us if you have any doubts, before starting the assignment itself.


ALTER USER murali WITH CREATEDB;


rails new rails-react-js --database=postgresql --webpack=react
bundle exec rails db:create db:migrate
gem 'react_on_rails', '~> 11.3.0'
bundle install
rails generate react_on_rails:install
bundle install

Procfile.dev-server
web: rails s -p 3000
client: sh -c 'rm -rf public/packs/* || true && bundle exec rake react_on_rails:locale && bin/webpack-dev-server'

foreman start -f Procfile.dev-server


yarn add react-router react-router-dom


bundle exec rake webpacker:compile

foreman start -f Procfile.dev-server


Pri	Question	Teaming Stages	Appears (Day)	Frequency	Type	Role	Required?	Conditions	Mapping


rails g model Test pri:integer question:string team_stages:string appears_day:string frequency:string types:string role:string required:string conditions:string mapping:string 

, default: -> { 'CURRENT_TIMESTAMP' }


before_save :generate_timestamp

  def generate_timestamp
    self.created_at = DateTime.now
    self.updated_at = DateTime.now
  end





rbenv 1.1.1-39-g59785f6
ruby 2.7.1p83 (2020-03-31 revision a0c7c23c9c) [x86_64-linux]
Successfully uninstalled heroku-3.99.3



--After updating my database file, I also made sure to
--delete my database on Heroku
--delete my schema
--recreate my database

heroku addons:create heroku-postgresql:hobby-dev

--recreate my databese

heroku rake db:schema:load

--run migrations

heroku run rake db:migrate

---------------------------------------

rails generate model Role name:string

rails generate model Mapping name:string



api/v1/tests/1/get_mappings

api/v1/tests/1/get_roles