describe("Todo List", () => {
  it("Get all Todo [EMPTY]", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8000",
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body["data"]).to.have.length(0);
    });
  });

  it("Get all Todo [NOT FOUND]", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:8000/1",
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.eq(404);
      expect(res.body["message"]).to.eq("Todo not found");
    });
  });
});
