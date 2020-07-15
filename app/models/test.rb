class Test < ApplicationRecord
	before_save :generate_timestamp

	require 'csv'

	def self.import(file)
		# CSV.foreach(file.path, headers: true) do |row|
		# 	Test.create! row.to_hash
		# end

		CSV.foreach(file.path, headers: true) do |row|

			unless  Role.find_by_name(row[6]).present?			 	
			 Role.create(name: row[6])				
			end
			unless  Mapping.find_by_name(row[9]).present?			 	
			 Mapping.create(name: row[9])				
			end
            company_hash = Test.new
            company_hash.pri = row[0]
            company_hash.question = row[1]
            company_hash.team_stages = row[2]
            company_hash.appears_day = row[3]
            company_hash.frequency = row[4]
            company_hash.types = row[5]
            company_hash.role = row[6]
            company_hash.required = row[7]
            company_hash.conditions = row[8]
            company_hash.mapping = row[9]
            company_hash.save
        end
        # pri, question, team_stages, appears_day, frequency, types, role, required, conditions, mapping

		
	end

  def generate_timestamp
    self.created_at = DateTime.now
    self.updated_at = DateTime.now
  end
end
