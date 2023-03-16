import request from "supertest";
import { app } from "../app";

test("GET /genre should return list of movie genres", async () => {
    const res = await request(app)
        .get("/genre");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("genres");
});