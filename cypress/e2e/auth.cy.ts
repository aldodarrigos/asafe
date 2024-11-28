describe("Authentication Flow", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });

  it("should login successfully with correct credentials", () => {
    cy.get('input[name="email"]').type("test@test.com");
    cy.get('input[name="password"]').type("testing");
    cy.get('button[type="submit"]').click();

    // Should redirect to dashboard
    cy.url().should("include", "/dashboard");
  });

  it("should show error with incorrect credentials", () => {
    cy.get('input[name="email"]').type("wrong@email.com");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    cy.contains("Invalid credentials").should("be.visible");
  });
});
