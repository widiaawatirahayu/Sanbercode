import { ForgotPassword } from "../../support/PageObject/TC002ForgotPassword";

describe('SC011'- Reset Password Flow',()=>{
    it ('should send reset password request and show confirmation',()=>{
        ForgotPassword.visit()
        ForgotPassword.fillUsername('Admin')
        ForgotPassword.clickResetbtn()

        ForgotPassword.assertResetConfirmation()
    })
})