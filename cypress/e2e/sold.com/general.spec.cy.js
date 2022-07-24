describe('Opening the TodoMVC app to check general specs', () => {
  beforeEach(() => {
    cy.exec('npm run start')
    cy.visit('/')
  })

  it('Test 1: Opens initial TodoMVC app to see if main and footer is hidden while input is focused', () => {
    cy.get('[data-id="main"]').should('not.be.visible')
    cy.get('[data-id="footer"]').should('not.be.visible')
  })

  it('Test 2: Input should have foucs when page is loaded', () => {
    cy.get('[data-reactid=".0.0.1"]').should('have.focus')
  })

  it('Test 3: Add todo and enter to clear text field', () => {
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.0.1"]').should('be.empty')
  })

  it('Test 4: Adding todo will have visible main and footer', () => {
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.0"').should('be.visible')
    cy.get('[data-reactid=".0.2"').should('be.visible')
  })

  it('Test 5: Add New todo and check if it exists', () => {
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world{enter}')
    cy.get('[data-reactid=".0.1.2"]').should('have.length', 1)
  })

  it('Test 6: Add Three todos and Make Sure 3 li items exists', () => {
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world 1{enter}')
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world 2{enter}')
    cy.get('[data-reactid=".0.0.1"]').type('Hello, world 3{enter}')

    cy.get('.todo-list > li').should('have.length', 3)
  })

  it('Test 7: Check value if it trims leading or trailing spaces', () => {
    cy.get('[data-reactid=".0.0.1"]').type('    Hello, world     {enter}')
    cy.get('ul .edit').should('have.value', 'Hello, world')
  })
})
