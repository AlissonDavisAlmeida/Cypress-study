import { testData } from "./model"
describe('Fixture examples tests', () => {

    beforeEach(() => {
        cy.fixture("example.json").as("example")
    })

    it('Get data from fixture file', () => {

        cy.get<testData>("@example").then((example) => {
            cy.log(example.name)
            cy.log(example.email)
            cy.log(example.body)
        })
    })
})