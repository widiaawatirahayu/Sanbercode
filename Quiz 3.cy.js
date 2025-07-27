describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  
  it('Berhasil login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('admin') 
    cy.get("[name='password']").type('admin123') 
    cy.get("button[type='submit']").click() 
    cy.url().should('include', '/dashboard') 
  })

  it('Gagal login Password Salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('admin') 
    cy.get("[name='password']").type('admin1234') 
    cy.get("button[type='submit']").click() 
    cy.get("[role='alert']").should('contain','Invalid credentials') 
  })

   it('Gagal login Username Salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('adminn') 
    cy.get("[name='password']").type('admin123') 
    cy.get("button[type='submit']").click() 
    cy.get("[role='alert']").should('contain','Invalid credentials') 
  })

})