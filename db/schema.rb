# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_15_054619) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "mappings", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.boolean "is_published"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tests", force: :cascade do |t|
    t.integer "pri"
    t.string "question"
    t.string "team_stages"
    t.string "appears_day"
    t.string "frequency"
    t.string "types"
    t.string "role"
    t.string "required"
    t.string "conditions"
    t.string "mapping"
    t.datetime "created_at", precision: 6
    t.datetime "updated_at", precision: 6
  end

end
