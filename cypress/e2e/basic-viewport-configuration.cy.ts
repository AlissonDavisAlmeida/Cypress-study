describe("Viewport configuration", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`);
    });

    it("device name", () => {
        cy.viewport("iphone-6")

        cy.get('#mobile_menu_toggler').should('be.visible')
    
    });

    it("specify viewport", () => {
        cy.viewport(320, 480)

        cy.get('#mobile_menu_toggler').should('be.visible')
    
    });
});