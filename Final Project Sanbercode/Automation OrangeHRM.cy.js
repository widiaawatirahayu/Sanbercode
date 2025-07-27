import LoginPage from "../support/PageObject/LoginPage"

describe('template spec', () => {
  it('passes', () => {
    LoginPage.visit()
  })
  
  it('Berhasil login', () => {
    LoginPage.visit()
    LoginPage.InputUsername()
    LoginPage.InputPassword()

    LoginPage.InterceptLogin() 
    LoginPage.clickbtn()
    LoginPage.verifyLogin()
 
    LoginPage.assertionScenarioLogin()
  })

})