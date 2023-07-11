
describe('Basics', () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`)
    })

    it("Successful login", () => {
        cy.login("test", "Test1234*")
        cy.url().should("contain", "profile")
    })

    it("Unsuccessful login", () => {
        cy.get("#userName").type("testuser")
        cy.get("#password").type("Test1234")
        cy.get("#login").click()
        cy.url().should("contain", "login")
    })
})