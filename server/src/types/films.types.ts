
/**
 * to send a message (eg error message) to the client
 */
export type ServerMessage = {
    success:            boolean;
    message:            string;
}

export type User = {
    id?:                 number;
    name?:               string;
}

/**
 * Configuration object returned by
 * http://localhost:5000/configuration
 * (https://api.themoviedb.org/3/configuration)
 * 
 * provides the base URL for images etc
 * and the available image sizes
 * 
 * image format is:
 *  base_url + backdrop_size + backdrop_path
 * eg
 *  http://image.tmdb.org/t/p/w780/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg
 * 
 */
export type MovieAPIConfig = {
    images?:              Images;
    change_keys?:         string[];
}

export type Images = {
    base_url?:        string;
    secure_base_url?: string;
    backdrop_sizes?:  string[];
    logo_sizes?:      string[];
    poster_sizes?:    string[];
    profile_sizes?:   string[];
    still_sizes?:     string[];
}

/**
 * List of Genre objects returned by
 *  http://localhost:5000/genre
 *  (https://api.themoviedb.org/3/genre/movie/list)
 */
export type GenreList = {
    genres?: Genre[];
}

export type Genre = {
    id?:   number;
    name?: string;
}

/**
 *  Film object returned by
 *  http://localhost:5000/film/{movie_id}
 *  https://api.themoviedb.org/3/movie/{movie_id}
 */
export type Film = {
    adult?:                 boolean;
    backdrop_path?:         string;
    belongs_to_collection?: null;
    budget?:                number;
    genres?:                Genre[];
    homepage?:              string;
    id?:                    number;
    imdb_id?:               string;
    original_language?:     string;
    original_title?:        string;
    overview?:              string;
    popularity?:            number;
    poster_path?:           string;
    production_companies?:  ProductionCompany[];
    production_countries?:  ProductionCountry[];
    release_date?:          Date;
    revenue?:               number;
    runtime?:               number;
    spoken_languages?:      SpokenLanguage[];
    status?:                string;
    tagline?:               string;
    title?:                 string;
    video?:                 boolean;
    vote_average?:          number;
    vote_count?:            number;
}

export type ProductionCompany = {
    id?:             number;
    logo_path?:      null | string;
    name?:           string;
    origin_country?: string;
}

export type ProductionCountry = {
    iso_3166_1?: string;
    name?:       string;
}

export type SpokenLanguage = {
    english_name?: string;
    iso_639_1?:    string;
    name?:         string;
}

/**
 *  Film objects returned by
 *  http://localhost:5000/film/trending/day
 *  http://localhost:5000/film/trending/week
 *  http://localhost:5000/film/top_rated
 *  http://localhost:5000/film/by_genre?genre_ids=18&page=1
 *  
 *  (https://api.themoviedb.org/3/trending/movie/day)
 *  (https://api.themoviedb.org/3/trending/movie/week)
 *  (https://api.themoviedb.org/3/movie/top_rated)
 *  (https://api.themoviedb.org/3/discover/movie/?with_genres=16&page=1)
 */
export type FilmList = {
    page?:          number;
    results?:       FilmList_Film[];
    total_pages?:   number;
    total_results?: number;
}

export type FilmList_Film = {
    adult?:             boolean;
    backdrop_path?:     string;
    id?:                number;
    title?:             string;
    original_language?: string;
    original_title?:    string;
    overview?:          string;
    poster_path?:       string;
    media_type?:        string;     // only retured for Trending, not Top_Rated
    genre_ids?:         number[];
    popularity?:        number;
    release_date?:      Date;
    video?:             boolean;
    vote_average?:      number;
    vote_count?:        number;
}

/**
 * All the Reviews for a film
 *  https://api.themoviedb.org/3/movie/{movieID}/reviews
 */
export type Review_Results = {
    id?:            number;
    page?:          number;
    results?:       Review[];
    total_pages?:   number;
    total_results?: number;
}

export type Review = {
    author?:         string;
    author_details?: AuthorDetails;
    content?:        string;
    created_at?:     Date;
    id?:             string;
    updated_at?:     Date;
    url?:            string;
}

export type AuthorDetails = {
    name?:        string;
    username?:    string;
    avatar_path?: string;
    rating?:      number;
}


