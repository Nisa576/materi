const locator = require('../locator/HomepageLocator');

const css_colour = {
    Blue : 'background-color: blue;',
    Yellow : 'background-color: yellow;',
    Cyan: 'background-color: cyan;',
    Magenta: 'background-color: magenta;'
}

class Hpage {

    async visit(path){
        cy.visit(path);
        return cy.url().should('eq', 'htttp//localhost:6061/');

    }

    async type_qote(quote){
        return cy.get(locator.datatesid.tf_quote).type(quote);

    }

    async choose_colour(colour){
        return cy.get(locator.datatesid.sel_colour).select(colour);
    }

    async submit_quote(colour,quote){
        cy.get(locator.datatesid.btn_submit).click();
        cy.get(locator.datatesid.cont_colour).eq(1).should('have.attr','style').then(color =>{
            expect(color).to.be.equal(css_colour[colour]);
        })
        return cy.contains(quote).should('exist');

    }

    async clear_quote(quote){
        return cy.contains(quote).click().should('not.exist');
    }

}


module.exports = Hpage;