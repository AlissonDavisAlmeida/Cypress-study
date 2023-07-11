
describe("Alerts tests", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/javascript_alerts`)

    })

    it("JS Alerts", () => {
        cy.contains("button", "Click for JS Confirm").click()

        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am a JS Alert")
        })

    })

    it("JS Confirm", () => {
        cy.contains("button", "Click for JS Confirm").click()

        cy.on("window:confirm", (str) => {
            expect(str).to.equal("I am a JS Confirm")
            return true
        })

        cy.get("p#result").should("contain", "You clicked: Ok")
    })

    it("JS Confirm[cancel]", () => {
        cy.contains("button", "Click for JS Confirm").click()

        cy.on("window:confirm", (str) => {
            expect(str).to.equal("I am a JS Confirm")
            return false
        })

        cy.get("p#result").should("contain", "You clicked: Cancel")
    })

    it("JS Prompt", () => {
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("Hello")
        })

        cy.contains("button", "Click for JS Prompt").click()

        cy.get("p#result").should("contain", "You entered: Hello")


    })

})