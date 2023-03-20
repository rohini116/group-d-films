import { API_KEY, BASE_URL, buildUrl, getPageNumParam } from "./request_utils";


test("buildUrl constructs a valid movie API URL", async () => {
    // need an endpoint for the movie API + any optional query params
    expect(buildUrl(
        "/configuration",
        []))
        .toEqual(BASE_URL + "/configuration?" + API_KEY);

    expect(buildUrl(
        "/film/trending/day",
        []))
        .toEqual(BASE_URL + "/film/trending/day?" + API_KEY);    

    expect(buildUrl(
        "/film/trending/day/2",
        []))
        .toEqual(BASE_URL + "/film/trending/day/2?" + API_KEY);

    expect(buildUrl(
        "/discover/movie",
        ["genre_ids=18", "page=3"]))
        .toEqual(BASE_URL + "/discover/movie?" + API_KEY + "&genre_ids=18&page=3");
});

test("getPageNumParam - invalid page number returns empty query param", async () => {
    expect(getPageNumParam("")).toEqual("");
    expect(getPageNumParam(" ")).toEqual("");
    expect(getPageNumParam("abc")).toEqual("");
    expect(getPageNumParam("a1")).toEqual("");
});

test("getPageNumParam - valid page number returns page num query param", async () => {
    expect(getPageNumParam("1")).toEqual("page=1");
    expect(getPageNumParam("25")).toEqual("page=25");
    expect(getPageNumParam("1000")).toEqual("page=1000");
});