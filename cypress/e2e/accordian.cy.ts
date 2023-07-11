describe("Accordian tests", ()=>{
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`)
    })

    it("Default Accordion validation example", ()=>{
        cy.get("#section2Heading").click()

        cy.get("#section1Heading + div").should("not.be.visible")
        cy.get("#section1Heading").next().should("have.css", "display", "none")

        cy.get("#section2Heading").next().should("be.visible")
        cy.get("#section2Heading")
            .next()
            .should("have.css", "display", "block")
            .and("have.class", "show")
    })
})

