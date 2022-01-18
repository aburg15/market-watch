describe('selected stock page', () => {
  beforeEach(() => {
    cy.fixture('./stocks.json').then((allStocks) => {
      cy.intercept('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false', {
        statusCode: 200,
        body: allStocks
      })
    cy.visit('http://localhost:3000/');
    })
    cy.contains('Bitcoin')
      .click();
  })

  it('should contain a header', () => {
    cy.contains('h1', 'MARKET WATCH')
  })

  it('should visit a stock page after clicking it', () => {
    cy.url()
      .should('include', 'bitcoin');
  })

  it('should render selected stock details', () => {
    cy.get('h2')
      .contains('Bitcoin')
    cy.get('.selected-stock-details > div')
      .should('exist')
  })

  it('should not contain search bar', () => {
    cy.get('.search-bar')
      .should('not.exist')
  })

  it('should render a return button', () => {
    cy.get('.return-button')
      .should('exist')
  })

  it('return button should take user back to main page', () => {
    cy.get('.return-button')
      .click()
    cy.url()
      .should('not.include', 'bitcoin')
  })

})