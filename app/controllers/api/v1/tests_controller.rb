class Api::V1::TestsController < ApplicationController
  def index
    all_tests = Test.all
    render json: all_tests
  end

  def create
    test = Test.create(test_params)
    render json: test
  end

  def show
    test = Test.find(params[:id])
    render json: test
  end

  def update
    test = Test.find(params[:id])
    test.update(test_params)
    render json: test
  end

  def destroy
    Test.destroy(params[:id])
    head :ok
  end

  def get_roles
    all_roles = Role.all
    render json: all_roles
  end

  def get_mappings
    all_mappings = Mapping.all
    render json: all_mappings
  end


  private

  def test_params
    params.permit(:pri, :question, :team_stages, :appears_day, :frequency, :types, :role, :required, :conditions, :mapping)
  end
end

