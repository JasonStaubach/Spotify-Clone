json.song do
    json.extract! @song, :id, :name, :album_id
    json.mp3 @song.mp3.attached? ?  @song.mp3.url : nil
end
json.album do
    json.extract! @song.album, :id, :name
    json.photo @song.album.photo.attached? ? @song.album.photo.url : nil
end
