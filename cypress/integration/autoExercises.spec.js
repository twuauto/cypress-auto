
describe('Solution to automation Exercise', () => {

    beforeEach(() => {

        // Cypress first launches a fresh webpage before running each of the following testcases

        cy.visit('https://en.wikipedia.org/wiki/Metis_(mythology)')
    })

    describe('Create a list containing all headings in the Contents box', function () {

        ['Function', 'Family', 'Mythology', 'In sociology', 'Honours', 'Notes', 'References', 'Further reading'].forEach((heading) => {

            it('Verify the headings listed in the `Contents` box are used as headings on the page', function () {

                // This action verifies each heading label in the 'Contents' box is used as a heading such as h2 
                // Testcase fails when the heading listed in the 'Contents' box is not used as a heading on the page

                cy.contains('h2', heading)
            })
        })

        it('Verify the headings listed in the `Contents` box have functioning hyperlinks', () => {

            // The following actions verify all hyperlinks in the 'Contents' box are functional 
            // Testcase fails when any one of the hyperlinks fails to redirect cursor to the heading

            cy.get('#Function').click()
            cy.get('#Family').click()
            cy.get('#Mythology').click()
            cy.get('#In_sociology').click()
            cy.get('#Honours').click()
            cy.get('#Notes').click()
            cy.get('#References').click()
            cy.get('#Further_reading').click()
        })

        it('Verify in the _Personified concepts_, `Nike` has a popup that contains the following text', () => {

            // Note that Cypress does not provide a hover() method which makes interacting with hidden popups more challenging.

            // The following action makes the popup visible in Cypress on hover over the 'Nike' label
            // but it does not focus on the popup so it fails to verify the texts on the popup

            cy.contains("Nike")
              .trigger('mouseover', { force: true })
              .invoke('show')
              .contains('In ancient Greek religion, Nike was a goddess who personified victory. Her Roman equivalent was Victoria.')
        })

        it('Verify in the _Personified concepts_, if you click on `Nike`, it takes you to a page that displays a family tree', () => {

            // The following action clicks on the 'Nike' hyperlink and verifies it opens the correct URL

            cy.contains('Nike')
              .click({ force: true })
              .url()
              .should('equal', "https://en.wikipedia.org/wiki/Nike_(mythology)")
        })
    })
})
