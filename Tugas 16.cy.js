describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
  
  it('Berhasil login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('admin') 
    cy.get("[name='password']").type('admin123') 

    cy.intercept('Get','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'). as('Login')
    cy.get("button[type='submit']").click() 
    cy.wait('@Login'). its('response.statusCode').should('eq',200)
    
    cy.url().should('include', '/dashboard') 
  })



})