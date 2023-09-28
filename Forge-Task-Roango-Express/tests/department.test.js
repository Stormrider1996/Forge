const request = require("supertest");
const app = require("../app");

test("test show department with invalid department ID", async () => {
  const response = await request(app).get(
    "/api/v1/companies/valid_id/departments/invalid_id"
  );

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid department ID");
});

test("test show department with invalid company ID", async () => {
  const response = await request(app).get(
    "/api/v1/companies/invalid_id/departments/a67f32cd-bcb4-4c21-b0a4-bd36ec013d67"
  );

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test create department with department name", async () => {
  const mockDepartment = {};

  const response = await request(app)
    .post("/api/v1/companies/valid_id/departments")
    .send(mockDepartment);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Department name is required");
});

test("test update department with invalid department ID", async () => {
  const mockDepartment = {
    email: "updated@example.com",
  };

  const response = await request(app)
    .put("/api/v1/companies/valid_id/departments/invalid_id")
    .send(mockDepartment);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid department ID");
});

test("test delete department with invalid department ID", async () => {
  const response = await request(app).delete(
    "/api/v1/companies/valid_id/departments/invalid_id"
  );

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid department ID");
});

test("test update department with invalid company ID", async () => {
  const mockDepartment = {
    email: "updated@example.com",
  };

  const response = await request(app)
    .put(
      "/api/v1/companies/invalid_id/departments/a67f32cd-bcb4-4c21-b0a4-bd36ec013d67"
    )
    .send(mockDepartment);

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test delete department with invalid company ID", async () => {
  const response = await request(app).delete(
    "/api/v1/companies/invalid_id/departments/a67f32cd-bcb4-4c21-b0a4-bd36ec013d67"
  );

  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid company ID");
});

test("test post departments by company id V2 version", async () => {
  const response = await request(app).post(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a/departments`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get departments by company and department id V2 version", async () => {
  const response = await request(app).get(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a/departments/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get departments db view by company id V2 version", async () => {
  const response = await request(app).get(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a/departments`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test put departments by company id V2 version", async () => {
  const response = await request(app).put(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a/departments/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test delete departments by company id V2 version", async () => {
  const response = await request(app).delete(
    `/api/v2/companies/cacd047c-b091-450e-9526-28e8628b351a/departments/cacd047c-b091-450e-9526-28e8628b351a`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});
