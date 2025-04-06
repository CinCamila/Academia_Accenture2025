const SELETORES = {
  BTN_ABA_ATIVA: 'idealsteps-step-active',
  BTN_NEXT: '#nextsendquote',
  BTN_ENVIAR_COTACAO: '#sendquote',
  TABELA: '#priceTable',
  SELECT_OPTION: '[name="Select Option"]',
}

Cypress.Commands.add('validarPaginaPreco', () => {
  cy.get(`li.${SELETORES.BTN_ABA_ATIVA} a`).should('have.id', 'selectpriceoption')
  cy.log('Redirecionamento feito com sucesso.')
})

Cypress.Commands.add('selecionarPlano', () => {
  cy.get(SELETORES.TABELA).should('be.visible')
  cy.get('input[type="radio"]').should('have.length.greaterThan', 0).then($radios => {
    const index = Math.floor(Math.random() * $radios.length)
    cy.wrap($radios[index]).check({ force: true })
  })

  cy.log('Tabela de preços foi exibida e uma opção de plano selecionada.')

  cy.screenshot({
    capture: 'fullPage',
  })
  
  cy.get(SELETORES.BTN_NEXT).click()
  cy.log('Botão Next clicado')
})





