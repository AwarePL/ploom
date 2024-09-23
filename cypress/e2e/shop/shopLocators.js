export const naviLinks = {
    shop: '[data-testid="headerItem-0"]',
}

export const shopItem = (sku) => {
    return `div[data-sku = "${sku}"]`
}

export const productsPageElements = {
    productHeading: 'div.product-heading',
    addToCartButton: 'button[data-testid="pdpAddToProduct"]',
}

export const cartPageElements = {
    label: 'div.mini-cart__icon-label',
    container: 'div.mini-cart__container',
    productList: '[data-testid = "mini-cart-list"]',
    itemCounter: 'div.mini-cart__icon-label',
}
