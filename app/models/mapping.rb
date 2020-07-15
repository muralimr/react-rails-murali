class Mapping < ApplicationRecord
	before_save :generate_timestamp
	
	def generate_timestamp
    self.created_at = DateTime.now
    self.updated_at = DateTime.now
  	end
end
