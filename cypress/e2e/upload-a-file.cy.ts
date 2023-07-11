describe("Upload a file", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`)
    });

    it("should upload a file", () => {
        cy.get('input#uploadFile').attachFile("example.json");

        cy.get('#uploadedFilePath').should('contain', 'C:\\fakepath\\example.json');
    });
})