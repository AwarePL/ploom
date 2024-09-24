# Project Documentation

## Overview

This is examle cypress based project

## Test scenario:

-   Visit Ploom UK: Buy Heated Tobacco Products, Devices and Kits
-   Click Shop
-   Open the product page by SKU (data-sku="<>" in the DOM. As a test, you can use 'ploom-x-advanced')
-   Add to cart
-   Check your basket count
-   Open the basket
-   Check if the product is in the basket

## Installation

### Prerequisites

1. Install node.js version 18.\*
2. Install yarn package manager: `npm install yarn` in latest version

### Project instalation

1. Clone the repository: `git clone https://github.com/AwarePL/monogo.git`
2. Navigate to the project directory: `cd [project directory]`
3. Install all dependencies: `yarn install`

## Usage

This project can be run localy in headed and headless mode or via docker

### Local run

-   headed: `yarn open`
-   headless: `yarn run`

### Docker

-   `docker build --tag 'cypress' .`
-   `docker run --detach 'cypress'`
