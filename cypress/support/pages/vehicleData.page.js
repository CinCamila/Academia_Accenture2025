import { faker } from '@faker-js/faker';

const SELETORES = {
  SELECT_FABRICANTE: '#make',
  INPUT_DESEMPENHO_MOTOR: '#engineperformance',
  SELECT_DATA_FABRICAÇÃO: '#dateofmanufacture',
  SELECT_NUMERO_LUGARES: '#numberofseats',
  SELECT_TIPO_COMBUSTIVEL: '#fuel',
  INPUT_PRECO: '#listprice',
  INPUT_PLACA: '#licenseplatenumber',
  INPUT_QUILOMETRAGEM_ANUAL: '#annualmileage',
  BTN_NEXT: '#nextenterinsurantdata'
}

const veiculo = {
  fabricante: faker.number.int({ min: 1, max: 15 }),
  desempenhoKw: faker.number.float({ min: 50, max: 400, precisao: 0.1 }).toFixed(2),
  dia: faker.number.int({ min: 1, max: 28 }),
  mes: faker.number.int({ min: 1, max: 12 }),
  ano: faker.number.int({ min: 1950, max: 2024 }),
  numeroAssentos: faker.number.int({ min: 1, max: 9 }),
  combustivel: faker.number.int({ min: 1, max: 5 }),
  preco: faker.number.float({ min: 500, max: 100000 }).toFixed(2),
  placa: faker.string.alpha({ length: 3, casing: 'upper' }) + faker.string.numeric(4),
  milhas: faker.number.int({ min: 100, max: 100000 })
}

Cypress.Commands.add('preencherFormularioVeiculo', () => {
  cy.get(SELETORES.SELECT_FABRICANTE).then($select => {
    const totalOpcoes = $select[0].options.length;
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 });
    cy.wrap($select).select($select[0].options[indiceAleatorio].value);
  })

  cy.get(SELETORES.INPUT_DESEMPENHO_MOTOR).type(veiculo.desempenhoKw)
  cy.get(SELETORES.SELECT_DATA_FABRICAÇÃO).type(`${veiculo.mes}/${veiculo.dia}/${veiculo.ano}`)
  cy.get(SELETORES.SELECT_NUMERO_LUGARES).select(veiculo.numeroAssentos)

  cy.get(SELETORES.SELECT_TIPO_COMBUSTIVEL).then($select => {
    const totalOpcoes = $select[0].options.length;
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 });
    cy.wrap($select).select($select[0].options[indiceAleatorio].value);
  })

  cy.get(SELETORES.INPUT_PRECO).type(veiculo.preco)
  cy.get(SELETORES.INPUT_PLACA).type(veiculo.placa)
  cy.get(SELETORES.INPUT_QUILOMETRAGEM_ANUAL).type(veiculo.milhas)

  cy.screenshot({
    capture: 'fullPage',
  })
  cy.get(SELETORES.BTN_NEXT).click()
  cy.log('Botão Next clicado')
})
