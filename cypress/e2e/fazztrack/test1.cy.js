import ExamplePage from "../page/ExamplePage"

describe('Your first test', ()=> {
    
    //test case
    it('verify element page', function () {
        //visit web
        cy.visit('/')

        //verify label "Koligrum Web Playground"
        cy.get('h1').should($text => {
            expect($text).to.contain('Koligrum Web Playground')
        })

        //verify progress
        cy.get('[role=progressbar]')
            .should("be.visible")
            .and($text => {
                expect($text).to.contain('1 / 10')

            })

        //verify qoute texbox
        cy.get("#inputQuote")
            .should("be.visible")

    });
})

describe('cypreess basic 2', () => {
    it('verify list of option', function () {
       
        //visit web
        cy.visit('/')

        const optionlist = ["White", "Yellow", "Cyan", "Magenta", "Blue"];
        // get list option
        cy.get('select.form-control > option')
            .should($List => {
                //total list is 5
                expect($List).to.have.length(5)
                //verify all value

                for (let i = 0; i < $List.length; i++) {
                    // console.log("list: "+$list.eq(i))
                    // console.log("array: "+ optionList.[i])
                expect($List.eq(i)).to.contain(optionlist[i])
                }

                
            })
    });
    //let input
    it('check input', function () {  
        //visit web
        const examplePage = new ExamplePage ()
        cy.visit('/')

        //input at least 3 qoutes
        let i = 0
        let n = 3
        let arrayInput = []
        while (i < n){
            //input qoute
            let temp = "quote" + (i + 1)
            arrayInput.push(temp)
            examplePage.inputQuote(temp)

            //pilih warna --> pilih warna yang berbeda
            examplePage.selectColor(i)
            
            //click button
            examplePage.clickButton()

            i++

        }

        // verify grid view
        cy.get('#gridView')
            .click()

        // verify jumlah qoute benar
        cy.get('.quote').should('have.length', n+1)

        // verify quotes yang dimasukkan benar
        cy.get('.quote').then($ListQuotes => {
            for (let j = 0; j < arrayInput.length; j++) {
                expect($ListQuotes.eq(j + 1)).to.contain(arrayInput[j])

            }
        })

        //verify tablenya ada
        cy.get('#tableView')
            .click()

        //hover button table
        cy.get('#buttonShowTable').trigger('mouseover')

        //verify isi table
        cy.get('td[name="tableColumnColor"]').then($ListColor => {
            // for (let i = 1; j <= arrayInput.length; i++) {
            //     expect($ListColor.eq(j + 1)).to.contain(arrayInput[j])

            // }
            cy.log(ListColor.eq(i))
        })
        

    })
});