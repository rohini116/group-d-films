
# Group D Film Project

## Server API endpoints

http://localhost:5000               base url

/                                   app home page (currently hardcoded placeholder page)
/health                             server health status
/configuration                      get movie API server config data
/genre                              get a list of film genres
/film/trending/day/{page}           get a list of trending films for today (page optional, 1-1000)
/film/trending/week/{page}          get a list of trending films for current week (page optional, 1-1000)
/film/top_rated/{page}              get the top rated films (page optional, 1-1000)
/film/{movieID}                     get a single movie by ID
/film/by_genre?genre_ids=16&page=1  get films by genre (comma separate ids: genre_ids=18,80)
/review/{movieID}?page=1            get reviews for a film


### /configuration

Returns a MovieAPIConfig object (see server\src\types\films.types.ts)

This has the image base url, available image sizes and the movie server API key.
(films.types.ts also has an example object showing the available image sizes etc)

To create the url for a movie backdrop image:

base_url + backdrop_size + backdrop_path

eg http://image.tmdb.org/t/p/w780/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg



## .env issue

The project started out using .env files for dev/production environmental variables.
This was made to work under Linux and Windows where the server has been developed and tested
but it would not work on Macs where the client has been developed.

As a temporary fix, the .env files are no longer used, instead the client and server have their own configs\credentials file. This contains the movie API key as the client needs to make direct requests to the movie API server to load images for the films.

In a proper production project, the .env files would be made to work on all platforms and the API key not be stored on GitHub.







