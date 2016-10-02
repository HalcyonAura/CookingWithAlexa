require 'Allrecipes'
@data = ""
class WelcomeController < ApplicationController
  def index
	@data = params[:text1]
	@recipes = Allrecipes.new
  end
end
