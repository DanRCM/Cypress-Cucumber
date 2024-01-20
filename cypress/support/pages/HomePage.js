class HomePage{
    buttonBar01(){return cy.get('[data-slide-to="0"]');};
    buttonBar02(){return cy.get('[data-slide-to="1"]');};
    buttonBar03(){return cy.get('[data-slide-to="2"]');};
    ButtonSide(side){return cy.get('.carousel-control-next[data-slide="'+ side +'"]')};

    logoButton(){return cy.get('#nava img');}
    homeButton(){return cy.get('a:contains("Home")');}
    contactButton(){return cy.get('[data-target="#exampleModal"]');}
    aboutUSButton(){return cy.get('[data-target="#videoModal"]');}
    cartButton(){return cy.get('#cartur');}
    loginButton(){return cy.get('#login2');}
    signUpButton(){return cy.get('#signin2');}
    categoriesButton(){return cy.get('cat')};

    verifyPage(){
      cy.get('#nava.navbar-brand').should(($a) => {
          const text = $a.text();
          expect(text).to.include('PRODUCT STORE');
        });
    }

    product1(){return cy.get('.card-title a:contains("Sony xperia z5")');}
    product2(){return cy.get('.card-title a:contains("Nexus 6")');}
    product3(){return cy.get('.card-title a:contains("Sony vaio i5")');}
    phoneCat(){return cy.get('a:contains("Phones")')}

    clickProduct1(){this.product1().click()};
}   
module.exports = new HomePage;