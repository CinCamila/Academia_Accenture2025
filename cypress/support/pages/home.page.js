const BTN_ACESSA_AUTOMOBILE = '#nav_automobile'
const BTN_TITULO_PAGINA = '#selectedinsurance'
const BTN_ABA_ATIVA = 'idealsteps-step-active'


Cypress.Commands.add('acessarAutomobile', () => {
    cy.get(BTN_ACESSA_AUTOMOBILE).click()
    cy.get(BTN_TITULO_PAGINA).should('contain', 'Automobile Insurance')
    cy.get(`li.${BTN_ABA_ATIVA} a`).should('have.id', 'entervehicledata')

    cy.screenshot({
        capture: 'fullPage', 
      })
})
