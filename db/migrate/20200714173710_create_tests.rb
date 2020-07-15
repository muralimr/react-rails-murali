class CreateTests < ActiveRecord::Migration[6.0]
  def change
    create_table :tests do |t|
      t.integer :pri
      t.string :question
      t.string :team_stages
      t.string :appears_day
      t.string :frequency
      t.string :types
      t.string :role
      t.string :required
      t.string :conditions
      t.string :mapping

      t.timestamps
    end
  end
end
