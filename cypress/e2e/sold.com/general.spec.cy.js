describe('Opening the TodoMVC app to check general specs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Opens initial TodoMVC app', () => {
    cy.get('[data-reactid=".0.0"]').should('not.be.visible')
    cy.get('[data-reactid=".0.2"]').should('not.be.visible')
  })

  it('Opens initial display to see if it is focused on input field', () => {
    cy.get('[data-reactid=".0.0.1"]')
  })
})
