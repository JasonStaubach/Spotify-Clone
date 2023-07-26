class Song < ApplicationRecord
    validates :name, :album_id, presence: true

    has_one_attached :photo
    has_one_attached :mp3 

    belongs_to :album


 
end
