import userData from '../fixtures/users/userData.json'
import loginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'

const LoginPage = new loginPage ()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()

describe('Orange HRM Test', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericDateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericSelectorButton: "[tabindex='0']",
    genericGenderFiel: ".oxd-radio-wrapper",
    genericButtonSubmitField: "[type='submit']",
    selectNationality: ":nth-child(27) > span",
    selectMaritalStatus: ":nth-child(3) > span",

  }

  it.only('User Info Update - success', () => {
    LoginPage.accessLoginPage()
    LoginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashBoardPage()
    MenuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).clear('').type ('Fernando')
    cy.get(selectorsList.middleNameField).clear('').type('Cavalheiro')
    cy.get(selectorsList.lastNameField).clear('').type('Gianini')
    cy.get(selectorsList.genericField).eq(3).clear('').type('TestID')
    cy.get(selectorsList.genericField).eq(4).clear('').type('otherId-4321')
    cy.get(selectorsList.genericField).eq(5).clear('').type('driverLicente-1234')
    cy.get(selectorsList.genericDateField).eq(0).clear('').type('2025-16-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericSelectorButton).eq(0).click()
    cy.get(selectorsList.selectNationality).click()
    cy.get(selectorsList.genericSelectorButton).eq(1).click()
    cy.get(selectorsList.selectMaritalStatus).click()
    cy.get(selectorsList.genericDateField).eq(1).clear('').type('1991-16-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericGenderFiel).eq(0).click()
    cy.get(selectorsList.genericButtonSubmitField).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
  })

  it('Login - success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentionAlert)    
 })


 })