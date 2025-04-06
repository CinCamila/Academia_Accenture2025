import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário tenta escolher uma data futura no campo Date of Manufacture', () => {
    cy.escolherDataInvalida()
})

Then('o usuário vê a mensagem Must be today or somewhere in the past', () => {
    cy.mensagemErro()
})




