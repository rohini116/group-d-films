import request from "supertest";
import { app } from "../app";

test("GET /configuration should return a config object", async () => {
    const res = await request(app)
        .get("/configuration");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("images");
    expect(res.body).toHaveProperty("change_keys");
});