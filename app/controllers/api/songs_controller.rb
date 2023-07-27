class Api::SongsController < ApplicationController
    def show 
        @songs = Song.find_by(id: params[:id])
        render :show
    end
end