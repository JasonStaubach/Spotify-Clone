class Album < ApplicationRecord
    validates :name, presence: true
    validates :artist_id, presence: true

    has_one_attached :photo

    belongs_to :artist

    has_many :songs
end
