describe("Todo List", () => {
  it("Get all Todo [EMPTY]", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8000",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body["data"]).to.have.length(1);
    });
  });

  // create
  it("Create Todo [SUCCESS]", () => {
    // SEND DATA
    cy.request({
      method: "POST",
      url: "http://localhost:8000",
      body: {
        title: "Todo 1",
      },
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body["data"]["title"]).to.eq("Todo 1");
    });
    // Get All Again
    cy.request({
      method: "GET",
      url: "http://localhost:8000",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body["data"]).to.have.length(2);
    });
  });

  it("Get Todo By ID [NOT FOUND]", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8000/2",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body["message"]).to.eq("Todo not found");
    });
  });
  it("Get Todo By ID [FOUND]", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8000/1",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body["message"]).to.eq("Get todo by id 1");
    });
  });
});
