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
    Artist.first(2).each_with_index do |artist, index|
        artist.photo.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_#{index + 1}.jpg"),
            filename: "artist_#{index + 1}.jpg"
        )
    end
    puts "Creating albums"
    Album.create!(name: "Kiss From a Rose(Single)", artist_id:1)
    Album.first(1).each_with_index do |album, index|
        album.photo.photo.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_#{index + 1}.jpg"),
            filename: "#{album.name.split(" ").join("_")}.jpg"
        )
    end

    puts "Creating songs"
    Song.create!(name: "Kiss From a Rose", album_id:1)
    Song.first(1).each_with_index do |song, index|
        song.mp3.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/#{(song.name).split(" ").join("_")}.mp3"),
            filename: "#{(song.name)}.mp3"
        )
    end
# end
