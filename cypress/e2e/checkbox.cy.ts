describe("Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`)
    })


    it("Checkbox scenario", () => {
        cy.get("input[type='checkbox']").check({ force: true }).should("be.checked")

        cy.get("#result").should("contain.text", "You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile")
    })

})


describe.only("The internet app", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/checkboxes`)

    })

    it("Checkboxes scenario", () => {
        cy.get("form#checkboxes input").eq(0).click().should("be.checked")
    })
})