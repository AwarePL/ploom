import {
    clickShop,
    openProductPageBySku,
    addToCart,
    checkCartContents,
} from './shopActions'
describe('Visit Ploom UK: Buy Heated Tobacco Products, Devices and Kits', () => {
    Cypress.on('uncaught:exception', () => {
        return false
    })
    beforeEach(() => {
        cy.setAgeCookie()
        cy.visit('')
    })
    it('Find Ploom X Advanced by SKU and add it to the cart', () => {
        cy.passPrivacyTerms()
        clickShop()
        openProductPageBySku('ploom-x-advanced')
        addToCart()
        checkCartContents()
    })
})
