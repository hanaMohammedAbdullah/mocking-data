const request = require("supertest");
const app = require("../app");

test("POST /service-requests sending email ", async () => {
    const response = await request(app).post("/service-requests").send({
      customerName: "John Doe",
    //   customerEmail: "name@gmail.com",
    });
    expect(response.status).toBe(422);
    // done()
  });
test("POST /service-requests sending cutomer name ", async () => {
  const response = await request(app).post("/service-requests").send({
    customerName: "John Doe",
    // customerEmail: "name",
  });
  expect(response.status).toBe(422);
//   done()

});

// describe("Post Test suit cases", () => {
//   it("should pass", async () => {
//     const data = request(app).post("/service-requests", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         customerName: "John Doe",
//         // "customerEmail": "name",
//       }).then((response) => response.json()),
//     });
//     expect(data.body.message).toBe(
//       "service-request validation failed: email: Path `email` is required."
//     );
//   });
//   it("should pass", async () => {
//     const data = request(app).post("/service-requests", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         customerName: "John Doe",
//         customerEmail: "name",
//       }).then((response) => response.json()),
//     });
//     expect(data.status).toBe(200);
//   });
// });
