import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {
    isVisible: boolean = false;

    constructor(private _contactService: ContactService){}

    sendMessage(form: NgForm) {
        this._contactService.postContactForm(form.value);
    }
}