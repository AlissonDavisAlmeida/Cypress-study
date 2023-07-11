describe.skip("Broken images with Demo Qa", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/broken`)
    })

    it("should not broken image assert", () => {
        cy.get("div > img[src='/images/Toolsqa.jpg']")
            .should("be.visible")
            .and(($img) => {

                const img = $img[0] as HTMLImageElement

                expect(img.naturalWidth).to.be.greaterThan(0)
            })
    })

    it("should broken image assert", () => {
        cy.get("div > img[src='/images/Toolsqa_1.jpg']")
            .should("be.visible")
            .and(($img) => {

                const img = $img[0] as HTMLImageElement

                expect(img.naturalWidth).to.be.eq(0)
            })
    })
})

describe("Broken images with herokuapp", () => {

    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/broken_images`)
    })

    it("should not broken image assert", () => {
        cy.get('[src="img/avatar-blank.jpg"]')
            .should("be.visible")
            .and(($img) => {

                const img = $img[0] as HTMLImageElement

                expect(img.naturalWidth).to.be.greaterThan(0)
            })
    })

    it("should broken image assert", () => {
        cy.get('[src="asdf.jpg"]')
            .should("be.visible")
            .and(($img) => {

                const img = $img[0] as HTMLImageElement

                expect(img.naturalWidth).to.be.eq(0)
            })
    })
})