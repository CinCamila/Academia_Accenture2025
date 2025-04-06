import { Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário acessa o portal Tricentis Vehicle Insurance Application', () => {
    cy.visit('/')
})

And('clica no botão Automobile e é redirecionado para a página Enter Vehicle Data', () => {
    cy.acessarAutomobile()
})

When('o usuário preenche o forumulário do veículo com dados válidos e clica no botão Next', () => {
    cy.preencherFormularioVeiculo()
})

And('é redirecionado para a página Enter Insurant Data', () => {
    cy.validarPaginaSegurado()
})

And('preenche o forumulário do segurado com dados válidos e clica no botão Next', () => {
    cy.preencherFormularioSegurado()
})

And('é redirecionado para a página Enter Product Data', () => {
    cy.validarPaginaProduto()
})

And('preenche o forumulário do produto com dados válidos e clica no botão Next', () => {
    cy.preencherFormularioProduto()
})

And('é redirecionado para a página Select Price Option', () => {
    cy.validarPaginaPreco()
})

And('escolhe uma opção de plano e clica no botão Next', () => {
    cy.selecionarPlano()
})

And('é redirecionado para a página Send Quote', () => {
    cy.validarPaginaCotacao()
})

And('o usuário preenche o formulário de envio e clica no botão Send', () => {
    cy.preencherFormularioEnvio()
})

Then('o usuario vê um popup com a mensagem Sending e-mail success!', () => {
    cy.alertaSucesso()
})

And('clica no botão Ok para fechar o popup', () => {
    cy.clicarOk()
})




