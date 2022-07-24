describe('Opening the TodoMVC app to check general specs', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Opens initial TodoMVC app to see if main and footer is hidden while input is focused', () => {
    cy.get('[data-id="main"]').should('not.be.visible')
    cy.get('[data-id="footer"]').should('not.be.visible')
    cy.get('[data-reactid=".0.0.1"]').should('have.focus')
  })

  it('Add todo and enter to clear text field, footer and header should be visible', () => {
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.0.1"]').should('be.empty')

    cy.get('[data-reactid=".0.0"').should('be.visible')
    cy.get('[data-reactid=".0.2"').should('be.visible')
  })

})
