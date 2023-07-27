class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true#, length: { in: 3..70}

    has_one_attached :photo

    has_many :albums
end
