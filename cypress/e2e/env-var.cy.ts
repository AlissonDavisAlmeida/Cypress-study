describe("Env tests", () => {
    it("Demo test", () => {
        cy.log(Cypress.env("demoVar"))
    })
})