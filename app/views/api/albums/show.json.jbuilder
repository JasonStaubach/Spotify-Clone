json.extract! @album, :id, :name, :artist_id
json.photo @album.photo.attached? ?  @artist.photo.url : nil