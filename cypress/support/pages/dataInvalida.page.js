import { faker } from '@faker-js/faker';

const TEXT_MENSAGEM_ERRO = '.error'
const SELECT_DATA_FABRICAÇÃO = '#dateofmanufacture'
const dia = faker.number.int({ min: 1, max: 28 })
const mes = faker.number.int({ min: 1, max: 12 })
const ano = faker.number.int({ min: 2025, max: 2100})

Cypress.Commands.add('escolherDataInvalida', () => {
    cy.get(SELECT_DATA_FABRICAÇÃO).type(`${mes}/${dia}/${ano}`)
})

Cypress.Commands.add('mensagemErro', () => {
    cy.get(TEXT_MENSAGEM_ERRO).should('be.visible')
    cy.get(TEXT_MENSAGEM_ERRO).should('contain', 'Must be today or somewhere in the past')
    cy.screenshot({
        capture: 'fullPage', 
      })
})
