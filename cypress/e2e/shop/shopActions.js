import {
    naviLinks,
    shopItem,
    productsPageElements,
    cartPageElements,
} from './shopLocators'
import { productNames } from './shopStrings'

export const clickShop = () => {
    cy.get(naviLinks.shop).click()
    cy.url().should('include', '/shop')
}

export const openProductPageBySku = (sku) => {
    cy.get(shopItem(sku)).click()
    cy.url().should('include', `/${sku}`)
    cy.get(productsPageElements.productHeading).within(() => {
        cy.get('h1').should('contain.text', productNames.ploomXAdvancedBlack)
    })
}

export const addToCart = () => {
    cy.get(productsPageElements.addToCartButton).click()
    cy.get(cartPageElements.label).then(($countLaber) => {
        cy.get(cartPageElements.itemCounter).then(($cartItemCount) => {
            expect($cartItemCount.text()).to.equal($countLaber.text())
        })
    })
}

export const checkCartContents = () => {
    cy.get(cartPageElements.container).should('be.visible')
    cy.get(cartPageElements.productList).contains(
        productNames.ploomXAdvancedBlack
    )
}
