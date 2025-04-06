const seletores = {
    BTN_ABA_ATIVA: 'idealsteps-step-active',
    BTN_NEXT_SEGURADO: '#nextenterinsurantdata',
    BTN_NEXT_PRODUTO: '#nextenterproductdata',
    BTN_NEXT_PRECO: '#nextselectpriceoption',
    BTN_NEXT_QUOTACAO : '#nextsendquote',
    LOADING_PREENCHA_FORMULARIO: '#xLoaderPrice'
}

Cypress.Commands.add('pularPreenchimento', () => {
    cy.get(seletores.BTN_NEXT_SEGURADO).click()
    cy.get(`li.${seletores.BTN_ABA_ATIVA} a`).should('have.id', 'enterinsurantdata')
    cy.get(seletores.BTN_NEXT_PRODUTO).click()
    cy.get(`li.${seletores.BTN_ABA_ATIVA} a`).should('have.id', 'enterproductdata')
    cy.get(seletores.BTN_NEXT_PRECO).click()
    cy.get(`li.${seletores.BTN_ABA_ATIVA} a`).should('have.id', 'selectpriceoption')
})

Cypress.Commands.add('mensagemPreencherFormulario', () => {
    cy.get(seletores.LOADING_PREENCHA_FORMULARIO).should('be.visible')
    cy.get(seletores.LOADING_PREENCHA_FORMULARIO).should('contain', 'Please, complete the first three steps to see the price table.')
    cy.screenshot({
        capture: 'fullPage', 
      })
})