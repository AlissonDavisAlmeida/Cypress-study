describe('Tooltips', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/tool-tips`)
    })


    it("Tooltip Button", () => {
        cy.get("#toolTipButton").realHover()

        cy.get("div[role='tooltip']").should("be.visible")
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Button")


    })
    
    it.only("A tag Tooltip", () => {
        cy.contains("a", "Contrary").realHover()
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary")
    })
})