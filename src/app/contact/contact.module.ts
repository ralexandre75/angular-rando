import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ContactUsComponent } from "./contact-us.component";

@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
    declarations: [
        ContactUsComponent
    ],
    exports: [],
    providers: []
})

export class ContactModule {}