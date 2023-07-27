json.extract! @artist, :id, :name
json.photo @artist.photo.attached? ?  @artist.photo.url : nil