import { faker } from '@faker-js/faker';

const SELETORES = {
  BTN_ABA_ATIVA: 'idealsteps-step-active',
  INPUT_PRIMEIRO_NOME: '#firstname',
  INPUT_SOBRENOME: '#lastname',
  INPUT_DATA_NASCIMENTO: '#birthdate',
  SELECT_GENERO: '[name="Gender"]',
  INPUT_RUA: '#streetaddress',
  SELECT_PAIS: '#country',
  INPUT_ZIP_CODE: '#zipcode',
  INPUT_CIDADE: '#city',
  SELECT_OCUPACAO: '#occupation',
  SELECT_HOBBIES: '[name="Hobbies"]',
  INPUT_SITE: '#website',
  BTN_UPLOAD_PIC: '#open',
  INPUT_PICTURE: 'input[type="file"]',
  BTN_NEXT: '#nextenterproductdata',
}

const usuario = {
  primeiroNome: faker.person.firstName(),
  sobrenome: faker.person.lastName().replace(/-/g, ''),
  dia: faker.number.int({ min: 1, max: 28 }),
  mes: faker.number.int({ min: 1, max: 12 }),
  ano: faker.number.int({ min: 1960, max: 2006 }),
  genero: faker.person.gender(),
  rua: faker.location.street(),
  pais: faker.location.country(),
  zipCode: faker.string.numeric(8),
  cidade: faker.location.city(),
  site: faker.internet.url(),
}

Cypress.Commands.add('validarPaginaSegurado', () => {
  cy.get(`li.${SELETORES.BTN_ABA_ATIVA} a`).should('have.id', 'enterinsurantdata')
  cy.log('Redirecionamento feito com sucesso.')
})

Cypress.Commands.add('preencherFormularioSegurado', () => {
  cy.get(SELETORES.INPUT_PRIMEIRO_NOME).type(usuario.primeiroNome)
  cy.get(SELETORES.INPUT_SOBRENOME).type(usuario.sobrenome)
  cy.get(SELETORES.INPUT_DATA_NASCIMENTO).type(`${usuario.mes}/${usuario.dia}/${usuario.ano}`)

  if (['male', 'trans male'].includes(usuario.genero.toLowerCase())) {
    cy.get(`${SELETORES.SELECT_GENERO}[value="Male"]`).check('Male', { force: true })
  }
  else {
    cy.get(`${SELETORES.SELECT_GENERO}[value="Female"]`).check('Female', { force: true })
  }

  cy.get(SELETORES.INPUT_RUA).type(usuario.rua)
  cy.get(SELETORES.SELECT_PAIS).select(usuario.pais)
  cy.get(SELETORES.INPUT_ZIP_CODE).type(usuario.zipCode)
  cy.get(SELETORES.INPUT_CIDADE).type(usuario.cidade)

  cy.get(SELETORES.SELECT_OCUPACAO).then($select => {
    const totalOpcoes = $select[0].options.length;
    const indiceAleatorio = faker.number.int({ min: 1, max: totalOpcoes - 1 });
    cy.wrap($select).select($select[0].options[indiceAleatorio].value);
  })

  cy.get(SELETORES.SELECT_HOBBIES).each($checkbox => {
    if (Math.random() < 0.5) {
      cy.wrap($checkbox).check({ force: true });
    }
  })

  cy.get(SELETORES.INPUT_SITE).type(usuario.site)
  cy.get(SELETORES.BTN_UPLOAD_PIC).click();
  cy.get(SELETORES.INPUT_PICTURE)
    .should('be.visible')
    .selectFile('cypress/fixtures/imagem.jpg', { force: true })

  cy.screenshot({
    capture: 'fullPage',
  })
  cy.get(SELETORES.BTN_NEXT).click()
  cy.log('Botão Next clicado')
})
