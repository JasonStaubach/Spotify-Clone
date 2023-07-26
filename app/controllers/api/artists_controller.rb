class Api::ArtistsController < ApplicationController
    wrap_parameters include: Artist.attribute_names + [:photo]

    def show
        @artist = Artist.find_by(id: params[:id])
        render :show
    end

    def index
        @artists = Artist.all
        render :index
    end
end