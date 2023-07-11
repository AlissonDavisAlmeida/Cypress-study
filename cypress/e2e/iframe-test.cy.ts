describe("Iframe test", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    });

    it("Simple and nested iframe", () => {
        cy.get("#frame1").then(($iframe) => {
            const $body = $iframe.contents().find("body");

            cy.wrap($body).should("contain.text", "Parent frame");

            cy.wrap($body).find("iframe").then(($iframe) => {
                const $body = $iframe.contents().find("body");

                cy.wrap($body).should("contain.text", "Child Iframe");
            });
        })
    });
});