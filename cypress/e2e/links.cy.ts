describe.skip('Dealing with links', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
    })

    it('First approach, not click on the link', () => {
        cy.get('#simpleLink').should("have.attr", "href", "https://demoqa.com")
        cy.get('#simpleLink').should("have.attr", "target", "_blank")
    })

    it("Second approach, remove the target", () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'https://demoqa.com')
    })
})


describe("Intercepting API(SPYING) requests after clicking on a link", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/links`)
        cy.intercept('GET', `${Cypress.env('demoQA')}/created`).as('linkStatus')
    })

    it("First approach, not click on the link", () => {
        cy.get('#created').click()
        cy.wait('@linkStatus').then((interception) => {
            cy.log("Request Interceptor: " + JSON.stringify(interception))
            expect(interception.response.statusCode).to.equal(201)


        })
    })
})