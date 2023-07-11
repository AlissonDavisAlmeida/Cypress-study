describe("First test", () => {

    beforeEach(() => {
        cy.visit("/textinput")
    })
    
    it("should visit the app", () => {

        cy.title().should("eq", "Text Input")

        cy.title().then((title) => {
            expect(title).to.equal("Text Input")
        })
    })

    it("Challenge in button", () => {
        cy.get("input#newButtonName").type("My new button",)

        cy.get("button#updatingButton").click().should("have.text", "My new button")
    })
})