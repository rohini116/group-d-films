import request from "supertest";
import { app } from "../app";
import * as filmService from "../services/films";
import { FilmList } from "../types/films.types";

/**
 * these are film_controller tests that mock the film service
 */

jest.mock("../services/films");

afterEach(() => {
	jest.clearAllMocks();
});

// as returned by Trending Films (has media_type field)
const movie123 : FilmList = {
    "page": 1,
    "results": [
        {
            "id": 123,
            "title": "65",
            "original_language": "en",
            "media_type": "movie",
            "genre_ids": [
                53,
                878,
                28
            ],
            "popularity": 375.438,
            "release_date": new Date(2023, 3, 2),
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
};

const movie456 : FilmList = {
    "page": 1,
    "results": [
        {
            "id": 456,
            "title": "Second film",
            "original_language": "en",
            "media_type": "movie",
            "genre_ids": [
                53,
                878,
                28
            ],
            "popularity": 375.438,
            "release_date": new Date(2023, 3, 2),
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
};

// as returned by TopRated Films (no media_type field)
const movie789 : FilmList = {
    "page": 1,
    "results": [
        {
            "id": 789,
            "title": "65",
            "original_language": "en",
            "genre_ids": [
                53,
                878,
                28
            ],
            "popularity": 375.438,
            "release_date": new Date(2023, 3, 2),
        }
    ],
    "total_pages": 1000,
    "total_results": 20000
};

test("GET /film/trending/day should get films for today", async () => {
    // Arrange - mock a known response as actual trending films will change
    jest.spyOn(filmService, "getTrendingFilms").mockResolvedValue(movie123);
    // Act
    const res = await request(app).get("/film/trending/day");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
    expect(res.body.results[0].id).toEqual(123);
});

test("GET /film/trending/week should get films for week", async () => {
    // Arrange - mock a known response as actual trending films will change
    //           using different film to differentiate from trending/day
    jest.spyOn(filmService, "getTrendingFilms").mockResolvedValue(movie456);
    // Act
    const res = await request(app).get("/film/trending/week");
    // Assert
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
    expect(res.body.results[0].id).toEqual(456);
});