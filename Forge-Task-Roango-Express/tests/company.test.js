const request = require("supertest");
const app = require("../app");

test("test create company with invalid website URL", async () => {
  const mockCompany = {
    name: "Example Company",
    website: "example",
    country: "Country",
  };

  const response = await request(app)
    .post("/api/v1/companies")
    .send(mockCompany);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid website URL");
});

test("test create company with missing name", async () => {
  const mockCompany = {
    name: "",
    website: "https://www.example.com",
    country: "Country",
  };

  const response = await request(app)
    .post("/api/v1/companies")
    .send(mockCompany);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Company name is required");
});

test("test show company with invalid company ID", async () => {
  const response = await request(app).get("/api/v1/companies/invalid_id");

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test update company with invalid company ID", async () => {
  const mockCompany = {
    website: "https://www.updated-example.com",
    country: "Updated Country",
  };

  const response = await request(app)
    .put("/api/v1/companies/invalid_id")
    .send(mockCompany);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test update company with invalid website URL", async () => {
  const mockCompany = {
    website: "example",
    country: "Updated Country",
  };

  const response = await request(app)
    .put("/api/v1/companies/cacd047c-b091-450e-9526-28e8628b351a")
    .send(mockCompany);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid website URL");
});

test("test delete company with invalid company ID", async () => {
  const response = await request(app).delete("/api/v1/companies/invalid_id");

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test invalid filter key", async () => {
  // Make a put request to the user route with the mock user id and object
  const response = await request(app).get(`/api/v1/companies?filter[xxx]=hash`);
  // Assert
  // Expect that the response status is 500
  expect(response.status).toBe(500);
  expect(response.error.text).toBe('{"error":"Invalid filter key"}');
});

test("test sort column", async () => {
  const response = await request(app).get(`/api/v1/companies?sort=xxx`);

  expect(response.body.sort).toBe("created_at");
});

test("test sort order", async () => {
  const response = await request(app).get(`/api/v1/companies?order=xxx`);

  expect(response.body.order).toBe("DESC");
});

test("test get companies V2 version", async () => {
  const response = await request(app).get(`/api/v2/companies`);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test post companies V2 version", async () => {
  const response = await request(app).post(`/api/v2/companies`);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get companies by id V2 version", async () => {
  const response = await request(app).get(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get companies by id V2 version", async () => {
  const response = await request(app).put(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get companies by id V2 version", async () => {
  const response = await request(app).delete(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});
