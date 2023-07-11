describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env('demoQA')}/droppable`)
    })

    it("Drag and Drop", () => {
        cy.get("#draggable").drag("#droppable", { force: true })

    })
})