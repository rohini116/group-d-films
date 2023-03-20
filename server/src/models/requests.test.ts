import { RequestHandler, rest } from "msw";
import { setupServer } from 'msw/node';
import { GenreList } from "../types/films.types";
import { getMovieData } from "./movie_api/requests";

const GENRE_LIST = {
    "genres": [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 12,
            "name": "Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        }
    ]
};

// default mocked response is success
const server = setupServer();

const responseHandler = (url : string, response : any) : RequestHandler => {
    return rest.get(url, (req, res, ctx) => {
        return res(ctx.json(response))
    });
}

const errorResponseHandler = (url : string, errorMessage : any) : RequestHandler => {
    return rest.get(url, (req, res, ctx) => {
        return res(
            ctx.status(404),
            ctx.json({ message : errorMessage })
          )
    });
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("getMovieData returns expected success response", async () => {
    server.use(responseHandler("https://api.themoviedb.org/3/genre/movie/list", GENRE_LIST));

    const result = await getMovieData<GenreList>("/genre/movie/list", [], 'genres', 'genres');
    expect(result).toEqual(GENRE_LIST);
});

test("getMovieData returns unknown data format", async () => {
    server.use(responseHandler("https://api.themoviedb.org/3/genre/movie/list", GENRE_LIST));
    
    // pass a field not found in the response (3rd param)
    const result = await getMovieData<GenreList>("/genre/movie/list", [], 'fooname', 'genres');
    expect(result).toEqual("Unknown data format for: genres");
});

test("getMovieData handles server error response", async () => {
    // setup an error response
    server.use(errorResponseHandler("https://api.themoviedb.org/3/genre/movie/list", "Not found"));
    
    const result = await getMovieData<GenreList>("/genre/movie/list", [], 'genres', 'genres');    
    expect(result).toEqual("Unknown data format for: genres");
})
