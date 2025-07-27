import LoginPage from "../support/PageObject/LoginPage"

describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    LoginPage.visit()
  })
  
  it('Berhasil login', () => {
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    LoginPage.visit()
    //cy.get("[name='username']").type('admin') 
    LoginPage.InputUsername()
    //cy.get("[name='password']").type('admin123') 
    LoginPage.InputPassword()

    //cy.intercept('Get','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'). as('Login')
    LoginPage.InterceptLogin()
    //cy.get("button[type='submit']").click() 
    LoginPage.clickbtn()
    //cy.wait('@Login'). its('response.statusCode').should('eq',200)
    LoginPage.verifyLogin()

    //cy.url().should('include', '/dashboard') 
    LoginPage.assertionScenarioLogin()
  })

})