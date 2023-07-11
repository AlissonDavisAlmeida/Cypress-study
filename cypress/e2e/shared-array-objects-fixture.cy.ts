import { Users } from "./model"

describe('Fixture examples tests', () => {

    beforeEach(() => {
        cy.fixture("users.json").as("users")
    })

    it('Get data from fixture file', () => {

        cy.get<Users>("@users").its("users").then((users) => {
            users.forEach((user) => {
                cy.log(user.name)
                cy.log(user.valid + "")
            })
        })
    })
})