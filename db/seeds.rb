require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts "Creating users"
    User.create!(username: 'Demo', password: 'password', birthday: Date.new(2001,4,5), email: "abc@gmail.com")
    puts "Creating artists"
    Artist.create!(name: "Seal")
    Artist.create!(name: "Kendrick Lamar")
    Artist.create!(name: "Lynyrd Skynyrd")
    Artist.create!(name: "Hozier")
    Artist.create!(name: "Aretha Franklin")
    Artist.first(1).each_with_index do |artist, index|
        artist.photo.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_#{index + 1}.jpg"),
            filename: "artist_#{index + 1}.jpg"
        )
    end
# end
