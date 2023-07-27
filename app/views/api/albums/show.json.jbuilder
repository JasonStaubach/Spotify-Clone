json.extract! @album, :id, :name, :artist_id
json.img_url @album.photo.url