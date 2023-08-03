class Api::SongsController < ApplicationController
    def show
        @song = Song.find_by(id: params[:id])
        render :show
    end

    def search
        query = params[:query]
        @songs = Song
        .where('name ILIKE ?', "%#{query}%") #sql search add joins to albums/artists later

        render :search
    end
end