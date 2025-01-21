class MyInfoPage {

    selectorsList () {
        const selectors = { 
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

    return selectors
        
    }
    fillPersonalDetails(firstName, middleName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear('').type (firstName)
        cy.get(this.selectorsList().middleNameField).clear('').type(middleName)
        cy.get(this.selectorsList().lastNameField).clear('').type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear('').type(nickName)
    }
    fillEmployeeDetails(employeeID, otherId, driverLicente, driverLicenteDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear('').type(employeeID)
        cy.get(this.selectorsList().genericField).eq(5).clear('').type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear('').type(driverLicente)
        cy.get(this.selectorsList().genericDateField).eq(0).clear('').type(driverLicenteDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }
    fillStatus(birthDate){
        cy.get(this.selectorsList().genericSelectorButton).eq(0).click()
        cy.get(this.selectorsList().selectNationality).click()
        cy.get(this.selectorsList().genericSelectorButton).eq(1).click()
        cy.get(this.selectorsList().selectMaritalStatus).click()
        cy.get(this.selectorsList().genericDateField).eq(1).clear('').type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericGenderFiel).eq(0).click()
    }
    saveForm(){
        cy.get(this.selectorsList().genericButtonSubmitField).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
    }
    
}

export default MyInfoPage
