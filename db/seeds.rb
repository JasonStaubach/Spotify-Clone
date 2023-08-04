require "open-uri"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# ApplicationRecord.transaction do 
    puts 'Destroying Tables...'
    Song.destroy_all
    Album.destroy_all
    Artist.destroy_all
    User.destroy_all

    puts "Creating users"
    User.create!(username: 'Demo', password: 'password', birthday: Date.new(2001,4,5), email: "abc@gmail.com")
    puts "Creating artists"
    Artist.create!(name: "Seal")
    Artist.create!(name: "Kendrick Lamar")
    Artist.create!(name: "Lynyrd Skynyrd")
    Artist.create!(name: "Rihanna")
    Artist.create!(name: "Hozier")
    Artist.create!(name: "Aretha Franklin")
    Artist.first(4).each_with_index do |artist, index|
        artist.photo.attach(
            # io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_#{index + 1}.jpg"),
            io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_1.jpg"),
            filename: "artist_#{index + 1}.jpg"
        )
    end
    
        
    puts "Creating albums"
    Album.create!(name: "Kiss From a Rose(Single)", artist_id:1)
    Album.create!(name: "To Pimp a Butterfly", artist_id:2)
    Album.create!(name: "(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", artist_id:3)
    Album.create!(name: "Loud", artist_id:4)
    puts "Adding album photos"
    Album.first(4).each_with_index do |album, index|
        album.photo.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/artist_#{index + 1}.jpg"),
            filename: "#{album.name.split(" ").join("_")}.jpg"
        )
    end
    # end

    puts "Creating songs"
    Song.create!(name: "Kiss From a Rose", album_id:1)
    Song.create!(name: "King Kunta", album_id:2)
    Song.create!(name: "The Blacker the Berry", album_id: 2)
    Song.create!(name: "Free Bird", album_id: 3)
    Song.create!(name: "Sweet Home Alabama", album_id: 3)
    Song.create!(name: "What's My Name?", album_id: 4)
    Song.create!(name: "Love The Way You Lie", album_id: 4)
    Song.create!(name: "Raining Men", album_id: 4)
    Song.create!(name: "Only Girl (In the World)", album_id: 4)
    Song.create!(name: "California King Bed", album_id: 4)
    Song.first(2).each_with_index do |song, index|
        song.mp3.attach(
            io: URI.open("https://staubify-dev.s3.amazonaws.com/#{(song.name).split(" ").join("_")}.mp3"),
            filename: "#{(song.name)}.mp3"
        )
    end