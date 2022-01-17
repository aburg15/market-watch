describe('main page', () => {
  beforeEach(() => {
    cy.fixture('./stocks.json').then((allStocks) => {
      cy.intercept('GET', 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false', {
        statusCode: 200,
        body: allStocks
      })
    cy.visit('http://localhost:3000/');
    })
  })

  it('should contain a header', () => {
    cy.contains('h1', 'MARKET WATCH')
  })

  it('should render stock cards upon page visit', () => {
    cy.get('.stock')
      .should('have.length', 7)
  })

  it('should render stock cards with stock names', () => {
    cy.contains('Bitcoin').should('be.visible')
    cy.contains('Ethereum').should('be.visible')
    cy.contains('Binance Coin').should('be.visible')
    cy.contains('Tether').should('be.visible')
    cy.contains('Cardano').should('be.visible')
    cy.contains('Solana').should('be.visible')
    cy.contains('USD Coin').should('be.visible')
  })

  it('should render stock container labels', () => {
    cy.get('.stock-container-label')
      .contains('STOCK').should('be.visible')
    cy.get('.stock-container-label')
      .contains('CURRENT PRICE').should('be.visible')
    cy.get('.stock-container-label')
      .contains('24 HR % CHANGE').should('be.visible')
    cy.get('.stock-container-label')
      .contains('MARKET CAP').should('be.visible')
  })

  it('should contain a search bar', () => {
    cy.get('.search-bar')
      .should('exist')
  })

  it('should filter stocks with search', () => {
    cy.get('input')
      .type('Ethereum');
    cy.contains('Bitcoin')
      .should('not.exist');
    cy.contains('Ethereum')
      .should('exist');
  })

  it('should display no stocks if search does not match any stocks', () => {
    cy.get('input')
      .type('zzzzzz');
    cy.get('.stock')
      .should('have.length', 0)
  })

})
