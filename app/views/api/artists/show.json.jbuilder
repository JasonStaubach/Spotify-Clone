json.extract! @artist, :id, :name
json.photo @artist.photo.attached? ?  url_for(@artist.photo.url) : nil