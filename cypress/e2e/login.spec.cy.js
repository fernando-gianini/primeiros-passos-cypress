import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js' 

const LoginPage = new loginPage ()
const dashboardPage = new DashboardPage ()
describe('Login Orange HRM Test', () => {

  it('Login - Fail', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    LoginPage.checkAccessInvalid()   
 })

  it('Login - Success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashBoardPage()
  })

})