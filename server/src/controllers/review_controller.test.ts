import request from "supertest";
import { app } from "../app";

test("GET /review/{movieId} should return first page of reviews for a film", async () => {
    const res = await request(app).get("/review/995133");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", 995133);
    expect(res.body).toHaveProperty("page", 1);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
    expect(res.body.results.length).toBeGreaterThan(0);
});

test("GET /review/{movieId}?page=100 should return empty list", async () => {
    const res = await request(app).get("/review/995133?page=100");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", 995133);
    expect(res.body).toHaveProperty("page", 100);
    expect(res.body).toHaveProperty("results");
    expect(res.body).toHaveProperty("total_pages");
    expect(res.body).toHaveProperty("total_results");
    expect(res.body.results).toHaveLength(0);
});