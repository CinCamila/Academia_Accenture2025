import { faker } from '@faker-js/faker';

const SELETORES = {
  BTN_ABA_ATIVA: 'idealsteps-step-active',
  INPUT_INICIO_DATA: '#startdate',
  SELECT_SOMA_SEGURO: '#insurancesum',
  SELECT_CLASSIFICACAO: '#meritrating',
  SELECT_SEGURO_DANOS: '#damageinsurance',
  SELECT_OPCIONAIS: '[name="Optional Products[]"]',
  SELECT_CARRO_RESERVA: '#courtesycar',
  BTN_NEXT: '#nextselectpriceoption',
}

Cypress.Commands.add('validarPaginaProduto', () => {
  cy.get(`li.${SELETORES.BTN_ABA_ATIVA} a`).should('have.id', 'enterproductdata')
  cy.log('Redirecionamento feito com sucesso.')
})

Cypress.Commands.add('preencherFormularioProduto', () => {
  const dataFutura = faker.date.future({
    years: 1,
    refDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
  });
  const data = {
    dia: String(dataFutura.getDate()).padStart(2, '0'),
    mes: String(dataFutura.getMonth() + 1).padStart(2, '0'),
    ano: dataFutura.getFullYear(),
  };
  cy.get(SELETORES.INPUT_INICIO_DATA).type(`${data.mes}/${data.dia}/${data.ano}`)

  cy.get(SELETORES.SELECT_SOMA_SEGURO).then($select => {
    const totalOpcoes = $select[0].options.length
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 });
    cy.wrap($select).select($select[0].options[indiceAleatorio].value)
  })

  cy.get(SELETORES.SELECT_CLASSIFICACAO).then($select => {
    const totalOpcoes = $select[0].options.length
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 })
    cy.wrap($select).select($select[0].options[indiceAleatorio].value)
  })

  cy.get(SELETORES.SELECT_SEGURO_DANOS).then($select => {
    const totalOpcoes = $select[0].options.length
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 })
    cy.wrap($select).select($select[0].options[indiceAleatorio].value)
  })

  cy.get(SELETORES.SELECT_OPCIONAIS).then($checkboxes => {
    const escolha = Math.round(Math.random())
    if (escolha === 0) {
      const index = Math.floor(Math.random() * $checkboxes.length)
      cy.wrap($checkboxes[index]).check({ force: true })
    }
    else {
      [...$checkboxes].forEach(checkbox => {
        cy.wrap(checkbox).check({ force: true })
      });
    }
  })

  cy.get(SELETORES.SELECT_CARRO_RESERVA).then($select => {
    const totalOpcoes = $select[0].options.length
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 })
    cy.wrap($select).select($select[0].options[indiceAleatorio].value)
  })

  cy.screenshot({
    capture: 'fullPage',
  })
  cy.get(SELETORES.BTN_NEXT).click()
  cy.log('Botão Next clicado')
})
