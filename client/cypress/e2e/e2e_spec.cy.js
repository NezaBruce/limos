describe('Calculator tests', () => {

  it('it should load correcly', () => {
    cy.visit('http://localhost:3000');
  })

  it('It should perform actions ', () => {
    cy.visit('http://localhost:3000');
    cy.contains('7').click()
    cy.contains('2').click()
    cy.contains('+').click()
    cy.contains('=').click()
    
    // // Get an username input, type into it
    // cy.get('.username').type('james morgan')
    // //verify wether  username was typed
    // cy.get('.username').should('have.value', 'james morgan')

    // // Get an email input, type into it
    // cy.get('.email').type('jamesmorgan@me.com')
    // //verify wether  email was typed
    // cy.get('.email').should('have.value', 'jamesmorgan@me.com')
    
    // // Get an message input, type into it
    // cy.get('.message').type('I am interested in a price quote on this car. Please contact me at your earliest convenience with your best price for this car')
  
    // //place an order 
  })

})
// describe('Limos tests', () => {

//   it('it should visit limos', () => {
//     cy.visit('http://localhost:3000');
//   })

//   it('should contain "sign in"', () => {
//     cy.visit('http://localhost:3000');
//     cy.contains('Sign in').click()
//   })
  
//   it('click "single car" navigate to buy url', () => {
//     cy.visit('http://localhost:3000');
//     cy.contains('petrol').click()
//       // Should be on a new URL which
//     // includes '/bookit'
//     cy.url().should('include', '/bookit')
//   })

//   it('Getting inputs andplace an order for a car ', () => {
//     cy.visit('http://localhost:3000');
//     cy.contains('petrol').click()
//     // Get an username input, type into it
//     cy.get('.username').type('james morgan')
//     //verify wether  username was typed
//     cy.get('.username').should('have.value', 'james morgan')

//     // Get an email input, type into it
//     cy.get('.email').type('jamesmorgan@me.com')
//     //verify wether  email was typed
//     cy.get('.email').should('have.value', 'jamesmorgan@me.com')
    
//     // Get an message input, type into it
//     cy.get('.message').type('I am interested in a price quote on this car. Please contact me at your earliest convenience with your best price for this car')
  
//     //place an order 
//     cy.contains('Send a message').click() 
//   })

// })
