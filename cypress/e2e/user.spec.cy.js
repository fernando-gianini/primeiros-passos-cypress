import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js' 

const Chance = require('chance');

const chance = new Chance();
const LoginPage = new loginPage ()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()
const myInfoPage = new MyInfoPage ()


describe('Orange HRM Test', () => {

  it('User Info Update - success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashBoardPage()
    MenuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), 'Cavalheiro', chance.last(),chance.animal())
    myInfoPage.fillEmployeeDetails(chance.string(),chance.string(), chance.natural(), '2025-16-12')
    myInfoPage.fillStatus(chance.date({string: true, american: false}))
    myInfoPage.fillStatus('1991-16-12')
    myInfoPage.saveForm()
  })

 

 })