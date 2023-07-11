describe('Retry ability demo', () => {

    it("Visit with delay", () => {
        cy.visit("/clientdelay")

        cy.get('#ajaxButton').click().then(() => {
            cy.get('.bg-success', { timeout: 15000 }).should('be.visible')
        })
    })

    it.only("Progress bar", () => {
        cy.visit("/progressbar")

        cy.get('#startButton').click()

        cy.get('#progressBar', { timeout: 15000 }).should('have.text', '100%')

    })
})