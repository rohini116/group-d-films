
# Group D Film Project - Server

The server provides an API with a number of endpoints to get film data.
This data originates from the Movie Database (TMDB)
https://www.themoviedb.org/documentation/api

The datatypes returned by this server are the same as the ones returned by the Movie Database.
(see server\src\types\film.types.ts for a list of these datatypes and the endpoints that return them)

There is a list of server test requests in the file:
server\src\postman_requests.json


## Server API endpoints

http://localhost:5000               server base url

/health                             server health status
/configuration                      get config data such as available image sizes for film backdrops
/genre                              get a list of film genres
/film/trending/day/{page}           get a list of trending films for today (page 1-1000)
/film/trending/week/{page}          get a list of trending films for current week (page 1-1000)
/film/top_rated/{page}              get the top rated films (page 1-1000)
/film/{movieID}                     get a single film by ID
/film/by_genre?genre_ids=16&page=1  get films by genre (comma separate ids: genre_ids=18,80)
/review/{movieID}?page=1            get reviews for a film


### /configuration

Returns a MovieAPIConfig object (see server\src\types\films.types.ts)

This has the data needed to load film images, eg backdrops and posters.
Film images are accessed directly from the Movie Database server.

The format for a film image is:

base_url + backdrop_size + backdrop_path

eg http://image.tmdb.org/t/p/w780/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg

base_url and backdrop_size are found in the MovieAPIConfig object
The image filename is found in the Film object returned by the endpoint /film/{movieID}
(see below)


### /genre

This endpoint returns a list of Genre objects.
These are contained in a GenreList object which has a single field "genres" which contains an array of Genre objects.

A film can belong to more than one genre.


### /film/trending/day/{page}

Returns a list of films that are currently trending today.
These are returned in a FilmList object that can contain up to 20 films.
It also contains the page number, total number of pages and total number of films.

The film object returned is the type FilmList_Film. This has fewer fields than the main Film object as
returned by /film/{movieID} it also contains GenreIDs rather than the Genre objects

Page number can be between 1-1000. If omitted the first page of results is returned


### /film/trending/week/{page}

Same as for /film/trending/day/ (above) but returns trending films for the current week.


### /film/top_rated/{page}

Returns the top rated films. A page of up to 20 film results is returned at a time.
This works the same way as /film/trending/day/ (as shown above)


### /film/{movieID} 

Returns the full details for a single film. This includes a list of Genre objects and filenames for the
films backdrop and poster images etc. The object type returned is 'Film'


### /film/by_genre?genre_ids=16&page=1

Returns a list of films which are in the specified Genre(s). A page of up to 20 film results is returned
at a time. This works the same way as /film/trending/day/ (as shown above)

More than 1 genre ID can be specified by comma separating them.

eg /film/by_genre?genre_ids=16,18&page=1


### /review/{movieID}?page=1

Returns any reviews for the specified film. Up to 20 are returned at a time. Use the page parameter to
access additional reviews if available.

The returned data is in the same format as for /film/trending/day/ (see above)


## Types and .env

To keep the project simple the client and server each have their own copy of the types file.
(server\src\types\film.types.ts)

Also to keep things simple, .env files have not been used as the project has been developed on Windows,
Linux and Macs. The node package cross-env could have been used to facilitate environmental variables on all platforms. 


## Server Testing

As this is a very simple server, which ultimately passes requests on to the Movie Database server (TMDB),
the service layer does very little. So testing has been done on the controllers to ensure the correct data is
returned. Testing has also been done on the low level functions.










