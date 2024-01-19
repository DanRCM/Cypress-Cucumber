class AboutUsPage{
    AboutUsPageItems={
        btnPlayVideo:'.video-js button[title="Play Video"]',
        btnClose: '#videoModal .modal-footer button',
        modal: '#videoModal'
    }
    btnPlayVideo(){return cy.get(this.AboutUsPageItems.btnPlayVideo);}
    modal(){return cy.get(this.AboutUsPageItems.modal);}
    btnClose(){return cy.get(this.AboutUsPageItems.btnClose);}

    verifyPage(){this.modal().should('have.css','display','block');}
    ClosePage(){return this.btnClose().click();}
}
module.exports = new AboutUsPage();