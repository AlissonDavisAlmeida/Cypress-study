describe('Locators', () => {
    beforeEach(() => {
        cy.visit("/dynamicid")
    })

    it('CSS Selector', () => {
        cy.contains("Button with Dynamic ID").should("have.text", "Button with Dynamic ID")
    })

    it("Cy.get + cy.find", () => {
        cy.get("div").find("button")
    })
})