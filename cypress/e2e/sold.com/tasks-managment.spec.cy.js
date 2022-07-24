describe('Task-Manangement Specs', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.0.1"]').type('Hello Back{enter}')
  })

  it('Test 1: Clicks Mark all as completed ', () => {
    cy.get('[data-reactid=".0.1.1"]').click()
    cy.get('li').should('have.class', 'completed')
  })

  it('Test 2: Toggle Mark removes li completed class', () => {
    cy.get('[data-reactid=".0.1.1"]').click().click()
    cy.get('li').should('not.have.class', 'completed')
  })

})
