# frozen_string_literal: true

class TestImportController < ApplicationController
  

  def index
    @hello_world_props = { name: "Stranger" }
  end

  def create
  	Test.import(params[:file])
  	redirect_to root_url, notice: "Data import" 
  	
  end
end
