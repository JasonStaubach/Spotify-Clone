class Artist < ApplicationRecord
    validates :name, presence: true, uniqueness: true, length: { in: 3..70}
    validates :bio, presence: true
    validate :verified, inclusion: { in: [true, false] }

end
