
/**
 *  Result for:
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

export type Genre = {
    id?:   number;
    name?: string;
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
 *  Result for:
 *  https://api.themoviedb.org/3/movie/top_rated
 */
export type FilmList_TopRated = {
    page?:          number;
    results?:       Film_TopRated[];
    total_pages?:   number;
    total_results?: number;
}

export type Film_TopRated = {
    adult?:             boolean;
    backdrop_path?:     string;
    genre_ids?:         number[];
    id?:                number;
    original_language?: string;
    original_title?:    string;
    overview?:          string;
    popularity?:        number;
    poster_path?:       string;
    release_date?:      Date;
    title?:             string;
    video?:             boolean;
    vote_average?:      number;
    vote_count?:        number;
}

/**
 *  Result for:
 *  https://api.themoviedb.org/3/genre/movie/list
 */
export type GenreList = {
    genres: Genre[];
}

/**
 *  Result for:
 *  https://api.themoviedb.org/3/review/{reviewID}
 */
export type Review = {
    id?:             string;
    author?:         string;
    author_details?: AuthorDetails;
    content?:        string;
    created_at?:     Date;
    iso_639_1?:      string;
    media_id?:       number;
    media_title?:    string;
    media_type?:     string;
    updated_at?:     Date;
    url?:            string;
}

export type AuthorDetails = {
    name?:        string;
    username?:    string;
    avatar_path?: string;
    rating?:      number;
}

/**
 *  Result for:
 *  https://api.themoviedb.org/3/movie/{movieID}/reviews
 */
export type Review_Results = {
    id?:            number;
    page?:          number;
    results?:       Review_Result[];
    total_pages?:   number;
    total_results?: number;
}

export type Review_Result = {
    author?:         string;
    author_details?: AuthorDetails;
    content?:        string;
    created_at?:     Date;
    id?:             string;
    updated_at?:     Date;
    url?:            string;
}




/**
 * other possible types
 */
export type User = {
    id?:                 number;
    name?:               string;
}

export type ServerMessage = {
    success:            boolean;
    message:            string;
}
