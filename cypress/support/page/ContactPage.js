class ContactPage{
    ContactPageElements={
        emailInput:'#recipient-email',
        nameInput:'#recipient-name',
        messageInput:'#message-text',
        sendMessageButton: '#exampleModal button:contains("Send message")',
        closeButton: '#exampleModal button:contains("Close")',
        modal:'#exampleModal'
    }
    emailInput(){return cy.get(this.ContactPageElements.emailInput);}
    nameInput(){return cy.get(this.ContactPageElements.nameInput);}
    messageInput(){return cy.get(this.ContactPageElements.messageInput);}
    sendMessageButton(){return cy.get(this.ContactPageElements.sendMessageButton);}
    closeButton(){return cy.get(this.ContactPageElements.closeButton);}
    modal(){return cy.get(this.ContactPageElements.modal);}
    
    verifyPage(){this.modal().should('have.css','display','block');}
}
module.exports = new ContactPage();