
# Group D Film Project

## Server API endpoints

http://localhost:5000               base url

/                                   app home page (currently hardcoded placeholder page)
/health                             server health status
/configuration                      get movie API server config data
/genre                              get a list of film genres
/film/trending/day                  get a list of trending films for today
/film/trending/week                 get a list of trending films for current week
/film/top_rated                     get the top rated films (as rated on the movie api site)
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



