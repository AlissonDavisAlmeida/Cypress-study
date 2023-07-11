describe("Download a file", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`)
    })


    it("Download the file", () => {
        cy.get("a#downloadButton").click()

        cy.verifyDownload("sampleFile.jpeg", { timeout: 10000 })
    })

})