import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

When('o usuário clica em Next até ser redirecionado para a página Select Price Option', () => {
    cy.pularPreenchimento()
    
})

Then('o usuário vê a mensagem Please, complete the first three steps to see the price table', () => {
    cy.mensagemPreencherFormulario()
})










