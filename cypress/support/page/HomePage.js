class HomePage{
    //items Carousel
    btnLeftCarousel(){return cy.get('.carousel-control-prev-icon');}
    btnRightCarousel(){return cy.get('.carousel-control-next-icon');}
    leftSideCarousel(){return cy.get('a.carousel-control-prev');}
    rightSideCarousel(){return cy.get('a.carousel-control-next');}
    ElementCarousel01(){return cy.get('[data-slide-to="0"]');}
    ElementCarousel02(){return cy.get('[data-slide-to="1"]');}
    ElementCarousel03(){return cy.get('[data-slide-to="2"]');}

    //navigation
    btnLogo(){return cy.get('#nava img');}
    btnHome(){return cy.get('a:contains("Home")');}
    btnContact(){return cy.get('[data-target="#exampleModal"]');}
    btnAboutUs(){return cy.get('[data-target="#videoModal"]');}
    btnCart(){return cy.get('#cartur');}
    btnLogin(){return cy.get('#login2');}
    btnSignUp(){return cy.get('#signin2');}
    categories(){return cy.get('.list-group-item#cat')};

    //products
    selectItems(){return cy.get('a:contains("Phones")');}
    product1(){return cy.get('.card-title a:contains("Sony xperia z5")');}
    product2(){return cy.get('.card-title a:contains("Sony vaio i5")');}
    product3(){return cy.get('.card-title a:contains("HTC One M9")');}
    
    //for verifications
    verifyPage(){return this.categories.should('exist');}
    verifyModalOpen(){return cy.get('body').should('have.class', 'modal-open');}
}

module.exports = new HomePage();