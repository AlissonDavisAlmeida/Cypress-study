describe('Click challenge', () => {
    beforeEach(() => {
        cy.visit("/click")
    })

    it('should click the button', () => {

        cy.get('#badButton').click().then(() => {
            cy.get('#badButton').should('have.class', 'btn-success')
        })
    })

    it("should have background color green", () => {
        cy.get('#badButton').click().then(() => {
            cy.get('#badButton').should('have.css', 'background-color', 'rgb(40, 167, 69)')
        })
    })
})

describe('Mouse over', () => {
    beforeEach(() => {
        cy.visit("/mouseover")
    })

    it('should mouse over the button', () => {
        cy.get('.text-primary').realHover()
    })
})


describe.only('Dynamic table challenge', () => {
    beforeEach(() => {
        cy.visit("/dynamictable")
    })

    it('Chrome CPU Test', () => {
        cy.get(`div[role="row"] span`).each(($cell) => {
            if ($cell.text().includes("Chrome")) {
                cy.log(`I have found the ${$cell.text()} row!`)
                let chromeRowValues: string[] = []
                chromeRowValues.push($cell.next().text())
            }
        })
    })
})