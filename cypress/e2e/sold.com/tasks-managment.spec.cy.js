describe('Task-Manangement Specs', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.0.1"]').type('Hello Back{enter}')
  })

  it('Test 1: Clicks Mark all Todos as completed ', () => {
    cy.get('[data-reactid=".0.1.1"]').click()
    cy.get('li').should('have.class', 'completed')
  })

  it('Test 2: Toggle Mark Todos removes  completed class', () => {
    cy.get('[data-reactid=".0.1.1"]').click().click()
    cy.get('li').should('not.have.class', 'completed')
  })

  it('Test 3: Todo Count displays 2 items left', () => {
    cy.get('[data-reactid=".0.2.0.0"]').contains('2')
  })

  it('Test 4: Marking one Todo as complete displays Clear Completed button', () => {
    cy.get(' ul li:first-child .toggle').click()
    cy.get('[data-reactid=".0.2"] > button').should('have.class', 'clear-completed')
  })

  it('Test 5: Clicking Clear completed button removes marked Todo', () => {
    cy.get(' ul li:first-child .toggle').click()
    cy.get('[data-reactid=".0.2"] > button').click()
    cy.get('[data-reactid=".0.2.0.0"]').should('not.eq', 2)
  })

  it('Test 6: Editing Mode should hide toggle control', () => {
    cy.get(' ul li:first-child  label' ).dblclick()
    cy.get('ul li:first-child  .toggle').should('not.be.visible')
  })
})
