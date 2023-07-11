class Login {
    private username: string = "#userName";
    private password: string = "#password";
    private loginButton: string = "#login";
    private invalidLoginMessage: string = "#name";

    submitLogin(username: string, password: string) {
        cy.get(this.username).type(username);
        cy.get(this.password).type(password);
        cy.get(this.loginButton).click();
    }
}



export const LoginPage = new Login();