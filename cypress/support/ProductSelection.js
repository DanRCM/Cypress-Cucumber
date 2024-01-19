const CartPage = require("./pages/CartPage");
const HomePage = require("./pages/HomePage");
const ProductPage = require("./pages/ProductPage");

class ProductSelection{

    SelectItem(){return HomePage.selectItems().click();}
    SelectProduct1(){ return HomePage.product1().click();}
    SelectProduct2(){ return HomePage.product2().click();}
    SelectProduct3(){ return HomePage.product3().click();}
    VerifyDetailProductPage(){return ProductPage.btnAddToCart.should('exist');}
    AddProducts(){ return ProductPage.btnAddToCart().click();}
    CheckProductsInCart(expectedProducts) {
        return CartPage.shoppingList().should('have.length', expectedProducts);
      }
    DeleteProduct(nList){
        CartPage.deleteButton().eq(nList-1).then((deleteOpt) => {
        cy.wrap(deleteOpt).click(); 
    });
    } 

    PlaceOrder(){return CartPage.btnPlaceOrder().click();}
    PlaceOrderInformation(name,country,city,card,monthCard,yearCard){
        CartPage.name().type(name);
        CartPage.country().type(country);
        CartPage.city().type(city);
        CartPage.card().type(card);
        CartPage.monthCard().type(monthCard);
        CartPage.yearCard().type(yearCard);
    }
    clickPurchaseBtn(){return CartPage.btnPurchase().click();}
    CheckPurchase(){return CartPage.verifyPurchase();}
}
module.exports = new ProductSelection();