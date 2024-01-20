import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";

class MethodsForPages{
    //start methods for Bar Products
    SelectSideCarousel(side){HomePage.ButtonSide(side).click()};

    SelectButtonCarousel(numBtn){
        if(numBtn == "first"){
            HomePage.buttonBar01().click();
        }else if(numBtn = "second"){
            HomePage.buttonBar02().click();
        }else if(numBtn = "third"){
            HomePage.buttonBar03().click();
        }else{
            throw new Error('Not valid number page: ${imageNumber}');
        }
    };
    
    VerifyVisibleProductBar(position){
        switch (position) {
            case 1:
                HomePage.buttonBar01().should('have.class', 'active');
                break;
            case 2:
                HomePage.buttonBar02().should('have.class', 'active');
                break;
            case 3:
                HomePage.buttonBar03().should('have.class', 'active');
                break;    
            default:
                break;
        }
    };
    //end methods for Bar Products

    //start navigation methods
    changePage(page){
        switch (page){
          case 'Home':
            HomePage.homeButton().click();
            break; 
          case 'Contact':
              HomePage.contactButton().click();
             break;
          case 'About us':
              HomePage.aboutUSButton().click();
            break; 
          case 'Cart':
              HomePage.cartButton().click();
             break;
          case 'Log in':
              HomePage.loginButton().click();
            break; 
          case 'Sign up':
              HomePage.signUpButton().click();
             break;
          default:
               throw new Error('Not valid page: ${page}');
       }
    }

    verifyCurrentPage(page){
        switch (page){
          case 'Home':
            HomePage.verifyPage();
            break; 
          case 'Contact':
            ContactPage.verifyPage();
             break;
          case 'About us':
            AboutUsPage.verifyPage();
            break; 
          case 'Cart':
            CartPage.verifyPage();
             break;
          case 'Log in':
            LoginPage.verifyPage();
            break; 
          case 'Sign up':
            SignUpPage.verifyPage();
             break;
          default:
               throw new Error('Not valid page: ${page}');
       }
      }
    //end navigation methods

    //start methods for products
    selectPhoneCat(){return HomePage.phoneCat().click();}
    selectProduct1(){ return HomePage.product1().click();}
    selectProduct2(){ return HomePage.product2().click();}
    selectProduct3(){ return HomePage.product3().click();}

    detailProduct(){return ProductPage.addToCartButton.should('exist');}
    addProductToCart(){ return ProductPage.addToCartButton().click();}

    checkProductsInList(expectedProducts) {
        return CartPage.listProducts().should('have.length', expectedProducts);
      }

    deleteProduct(nProduct){
        CartPage.deleteButton().eq(nProduct-1).then((deleteOpt) => {
        cy.wrap(deleteOpt).click(); 
    });} 

    placeOrder(){return CartPage.placeOrderBtn().click();}

    fillInformation(name,country,city,card,mCard,yCard){
        CartPage.name().type(name);
        CartPage.country().type(country);
        CartPage.city().type(city);
        CartPage.card().type(card);
        CartPage.monthCard().type(mCard);
        CartPage.yearCard().type(yCard);
    }

    clickPurchaseButton(){return CartPage.purchaseButton().click();}

    checkPurchase(){return CartPage.verifyPurchase();}
    //end methods for products
}
module.exports = new MethodsForPages;