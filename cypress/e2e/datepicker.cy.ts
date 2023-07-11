describe('Date picker', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("demoQA") + "/date-picker")
    })

    it('datepicker demo', () => {
        cy.get("input#datePickerMonthYearInput").click()

        cy.get("select.react-datepicker__month-select").select("January")
        cy.get("select.react-datepicker__year-select").select("2021")

        cy.findByText("16").click()
    })

})