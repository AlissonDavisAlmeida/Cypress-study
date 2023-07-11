import { first } from "cypress/types/lodash"

describe("Autocomplete tests", ()=>{
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`)
    })

    it("Autocomplete demo using yellow", ()=>{
        cy.get(".auto-complete__value-container").first().type("yellow")
        cy.contains("#react-select-2-option-0","Yellow").click()
    })
})


