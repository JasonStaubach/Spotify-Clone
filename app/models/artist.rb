class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true, length: { in: 3..70}

end
