describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/classattr")
    })

    it("how to find an element by its text", () => {
        cy.xpath(`//*[text()='Correct variant is']`).should("contain.text", "Correct")

        cy.xpath(`//pre[@class=' language-html']`).should("contain.text", "button")

        cy.xpath(`//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]`).should("contain.text", "Button").click()
    })
})