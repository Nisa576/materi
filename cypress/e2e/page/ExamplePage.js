class ExamplePage {
    inputQuote(quote){
        cy.get("#inputQuote")
        .type(quote)
    }

    selectColor(option){
        cy.get('#colorSelect')
            .select(option) 
    }

    clickButton(){
        cy.get('#buttonAddQuote')
            .click()
    }
    login(username, password){
        cy.get('')
            .type(username)

        cy.get('')
            .type(password)

        cy.get('')
            .clik

        cy.get('')
            .should("be.visible")
    }
}

export default ExamplePage