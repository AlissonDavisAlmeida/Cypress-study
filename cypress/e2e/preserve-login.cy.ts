Cypress.session.clearAllSavedSessions()

describe("Basics", () => {

    beforeEach(() => {
        
    })

    it("Check if session was saved", () => {
        cy.visit(`${Cypress.env("demoQA")}/login`)
    })

    it("Check if session was saved", () => {
        cy.visit(`${Cypress.env("demoQA")}/login`)
    })
})