import "cypress-file-upload"
import "@testing-library/cypress/add-commands"
require("cy-verify-downloads").addCustomCommand()
import "@4tw/cypress-drag-drop"
/// <reference types="cypress" />



Cypress.Commands.add("login", (username, password) => {
    cy.get("#userName").type(username)
    cy.get("#password").type(password)
    cy.get("#login").click()
 })


declare global {
    namespace Cypress {
        interface Chainable {
            login(username: string, password: string): void
        }
    }
}