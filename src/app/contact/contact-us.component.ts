import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    templateUrl: 'contact-us.component.html'
})
export class ContactUsComponent {
    isVisible: boolean = false;

    sendMessage(form: NgForm) {
        console.log(form.value);
    }
}