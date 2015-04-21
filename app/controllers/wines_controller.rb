class WinesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  @wines = Wine.all
end

def show
  @wine = Wine.find(params[:id])
end

def new
  @wine = Wine.new
end


def create
  @wine = Wine.new(wine_params)
  if @wine.save
    redirect_to(:action => 'index')
  else
    render('new')
  end
end

def edit
  @wine = Wine.find(params[:id])
end

def delete
  @wine = Wine.find(params[:id])
end


def destroy
  Wine.find(params[:id]).destroy
  redirect_to(:action => 'index')
end

def update
  @wine = Wine.find(params[:id])
  if @wine.update_attributes(wine_params)
    redirect_to(:action => 'show', :id => @wine.id)
  else
    render('index')
  end
end



private
def wine_params
params.require(:wine).permit(:name, :varietal, :winery, :url)
end
end
