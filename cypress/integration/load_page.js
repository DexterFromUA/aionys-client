describe('load page', () => {
    it('successful', () => {
        cy.visit('/')
    })

    it('adding note', () => {
        cy.get('input[name=text]').type('text-cypress')
        cy.get('input[name=description]').type('description-cypress')
        cy.get('button[title=add]').click()
        cy.get('p').should('contain', 'text-cypress')
    })
})
