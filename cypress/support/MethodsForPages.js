import AboutUsPage from "./page/AboutUsPage";
import CartPage from "./page/CartPage";
import ContactPage from "./page/ContactPage";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";

class MethodsForPage{

    changePage(page){
      switch (page){
        case 'Home':
          HomePage.btnHome().click();
          break; 
        case 'Contact':
            HomePage.btnContact().click();
           break;
        case 'About us':
            HomePage.btnAboutUs().click();
          break; 
        case 'Cart':
            HomePage.btnCart().click();
           break;
        case 'Log in':
            HomePage.btnLogin().click();
          break; 
        case 'Sign up':
            HomePage.btnSignUp().click();
           break;
        default:
             throw new Error(`Unsupported page: ${page}`);
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
             throw new Error(`Page does not exist: ${page}`);
     }
    }
    clickBarNext(element){
        switch (element){
           case 'next button':
              HomePage.btnRightCarousel().click();
                break; 
            case 'right':
              HomePage.rightSideCarousel().click();
                break;
            default:
                throw new Error(`Element does not exist: ${element}`);
        }
    }
    clickBarPrevious(element){
        switch (element){
           case 'previous button':
            HomePage.btnLeftCarousel().click();
                break; 
            case 'left':
              HomePage.leftSideCarousel().click();
                break;
            default:
                throw new Error(`Element does not exist: ${element}`);
        }
    }

    clickBtnBar(element){
        switch (element){
            case "first":
              HomePage.ElementCarousel01().click();
                break;
            case "second":
              HomePage.ElementCarousel02().click();
                break;
            case "third":
              HomePage.ElementCarousel03().click();
                break;
            default:
                throw new Error(`Element does not exist: ${element}`);
        }
    }

    verifyImageNumber(imageNumber) {
        switch (imageNumber) {
          case "first":
            HomePage.ElementCarousel01().should('have.class', 'active');
            break;
          case "second":
            HomePage.ElementCarousel02().should('have.class', 'active');
            break;
          case "third":
            HomePage.ElementCarousel03().should('have.class', 'active');
            break;
          default:
            throw new Error(`Invalid number for an image: ${imageNumber}`);
        }
      }
}
module.exports = new MethodsForPage();