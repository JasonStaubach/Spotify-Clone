# Staubify
## [Staubify Live](https://staubify.onrender.com/)

# Description
Staubify is a audio listening app inspired by Spotify. Users can listen to `songs` and `albums` and create `playlists` for their favorite music

# Technology
## React Redux
The Staubify stack uses `React Redux` to render and manage the state of the app's frontend

## Ruby on Rails
The backend of Staubify holds the database on `Ruby on Rails`

## Postgresql
`Postgresql` is used to store the app's data. Active Storage is used to store images with Amazon Web Services and associate them with songs, albums, and artists.

# Features
## User Auth
Users can sign up for an account that is secured with password encryption.
<img src="https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/0e49af40-bd9d-40ea-a90f-fe739f42fdf0" width="500" height="500" />

## Nav Menu
Users can login/logout, redirect to playlists or homepage. They can use the search bar to sort the project
![Screenshot 2023-08-04 145444](https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/c2b16df6-eab0-4f45-b59c-e8a4cbd0f8a3)

## Song and Album Display Page
There will be different rows in Staubify showing songs or albums in order. Clicking on the forms will play and pause the music.
<img src="https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/bea84626-aa07-4ad0-bd22-9702890e3350" width="600" height="600" />

## Playbar
This playbar will follow along with the music, you can pause/play, change the volume, and use the audio slider to change where in the song you are.


# Code Snippet

## Songs Jbuilder
these jbuilders attach music and pictures to the songs, and then searth through them by name dynamically.

<img src="https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/d6d4b489-1335-4e4f-b7b5-40fd54fa205c" width="500" height="200" />
<br/>
<img src="https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/588b3fb8-68e3-453d-8a9c-d358266f67f2" width="500" height="250" />


## Audio Bar
This code snippet shows some of the references I use to make the audio bar work, the setting of the current song in the session state so that it will play through refreshes and the useEffect hook that helps with playing and pausing the current song. This is just a demo of the many custom features I made for this app.
<br/>
<img width="512" alt="image" src="https://github.com/JasonStaubach/Spotify-Clone/assets/33754025/dfe5d06d-e177-445a-90f2-16d701d0ffcc">


