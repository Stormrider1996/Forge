const request = require("supertest");
const app = require("../app");

test("test invalid email", async () => {
  const mockUser = {
    email: "example",
    first_name: "XXXXXXX",
    last_name: "XXXXXXX",
    password: "XXXXXXXXX",
  };
  const response = await request(app).post(`/api/v1/users`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid email address");
});

test("test password must be at least 6 characters long", async () => {
  const mockUser = {
    email: "example@example.net",
    first_name: "XXXXXXX",
    last_name: "XXXXXXX",
    password: "X",
  };
  const response = await request(app).post(`/api/v1/users`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe(
    "Password must be at least 6 characters long"
  );
});

test("test missing first name", async () => {
  const mockUser = {
    email: "XXXXXXXXXXXXXXXXXXX",
    first_name: "",
    last_name: "XXXXXXX",
    password: "XXXXXXXXX",
  };
  const response = await request(app).post(`/api/v1/users`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("First name is required");
});

test("test missing last name", async () => {
  const mockUser = {
    email: "XXXXXXXXXXXXXXXXXXX",
    first_name: "XXXXXXX",
    last_name: "",
    password: "XXXXXXXXX",
  };
  const response = await request(app).post(`/api/v1/users`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Last name is required");
});

test("test show invalid user ID", async () => {
  const response = await request(app).get(`/api/v1/users/1`);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid user ID");
});

test("test put invalid user ID", async () => {
  const mockUser = {
    email: "XXXXXXXXXXXXXXXXXXX",
    first_name: "XXXXXXX",
    last_name: "XXXXXXX",
    password: "XXXXXXXXX",
  };
  const response = await request(app).put(`/api/v1/users/1`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid user ID");
});

test("test put invalid email adress", async () => {
  const mockUser = {
    email: "example",
    first_name: "XXXXXXX",
    last_name: "XXXXXXX",
    password: "XXXXXXXXX",
  };
  const response = await request(app)
    .put(`/api/v1/users/0f03d015-8fbf-4e75-8638-1c4167999a95`)
    .send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid email address");
});

test("test delete invalid user ID", async () => {
  const mockUser = {
    email: "XXXXXXXXXXXXXXXXXXX",
    first_name: "XXXXXXX",
    last_name: "XXXXXXX",
    password: "XXXXXXXXX",
  };
  const response = await request(app).delete(`/api/v1/users/1`).send(mockUser);
  expect(response.status).toBe(400);
  expect(response.body.errors[0].msg).toBe("Invalid user ID");
});

test("test invalid filter key", async () => {
  const response = await request(app).get(`/api/v1/users?filter[xxx]=hash`);
  expect(response.status).toBe(500);
  expect(response.error.text).toBe('{"error":"Invalid filter key"}');
});

test("test sort column", async () => {
  const response = await request(app).get(`/api/v1/users?sort=xxx`);
  expect(response.body.sort).toBe("created_at");
});

test("test sort order", async () => {
  const response = await request(app).get(`/api/v1/users?order=xxx`);
  expect(response.body.order).toBe("DESC");
});

test("test get users V2 version", async () => {
  const response = await request(app).get(`/api/v2/users`);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test post users V2 version", async () => {
  const response = await request(app).post(`/api/v2/users`);

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test get by id users V2 version", async () => {
  const response = await request(app).get(
    `/api/v2/users/0f03d015-8fbf-4e75-8638-1c4167999a95`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test put users V2 version", async () => {
  const response = await request(app).put(
    `/api/v2/users/0f03d015-8fbf-4e75-8638-1c4167999a95`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});

test("test delete users V2 version", async () => {
  const response = await request(app).delete(
    `/api/v2/users/0f03d015-8fbf-4e75-8638-1c4167999a95`
  );

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("V2");
});
