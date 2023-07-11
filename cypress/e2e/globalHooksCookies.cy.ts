Cypress.session.clearAllSavedSessions();

describe('Global Hooks Cookies', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
     });

    it("Success login preserver cookies", () => { 
        cy.contains("#userName-value", "test");
    });
    it("Success login preserver cookies", () => { 
        cy.contains("#userName-value", "test");
    });
    it("Counting cookies", () => {
        cy.getCookies().then((cookies) => {
            expect(cookies.length).to.equal(14);
        })
     });
});