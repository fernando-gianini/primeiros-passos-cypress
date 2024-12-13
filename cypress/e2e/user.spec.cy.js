import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField:"[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: ".--close",
    submitButton: "[type='submit']",
    bollansSelect: ".oxd-select-text-input",
    selectNationality: ":nth-child(27)",
    maritalStatusField: "span"
  }


  it.only('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Fernando')
    cy.get(selectorsList.middleNameField).clear().type('Gianini')
    cy.get(selectorsList.lastNameField).clear().type('Cavalheiro')
    cy.get(selectorsList.genericField).eq(4).clear().type('emploryee')
    cy.get(selectorsList.genericField).eq(5).clear().type('otherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('driveLicenseNumberTest')
    cy.get(selectorsList.dataField).eq(0).clear().type('2025-03-09')
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.bollansSelect).eq(0).click()
    cy.get(selectorsList.selectNationality).scrollIntoView().click()
    cy.get(selectorsList.bollansSelect).eq(1).click()
    cy.get(selectorsList.maritalStatusField).scrollIntoView().click()

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/auth/login')
    cy.get(selectorsList.wrongCredentialAlert)
  })
})