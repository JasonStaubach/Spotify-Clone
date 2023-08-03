json.songs({})

json.songs do
    @songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :name
        end
    end
end