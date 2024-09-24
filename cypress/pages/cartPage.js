import * as productLocators from '../locators/productLocators.js'
import { miniCart } from '../locators/cartLocators.js'

export const addProductToCart = () => {
    cy.get(productLocators.addToCartButton).click()
    cy.get(miniCart.label).should('contain.text', '1')
    cy.get(miniCart.container).should('be.visible')
    cy.get(miniCart.checkoutButton).should('be.visible')
}

export const checkCartContents = () => {
    cy.get(miniCart.container).should('be.visible')
}

export const verifyProductAddedToCart = (productName) => {
    cy.get(miniCart.productList).contains(productName)
}

export const verifyProductsAmmountInCart = () => {
    cy.get(miniCart.itemCounter).then(($cartItemCount) => {
        cy.get(miniCart.quantity).invoke('val').should('eq', $cartItemCount.text())
    })
}
