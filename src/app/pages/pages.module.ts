import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { MatButtonModule, MatCheckboxModule, MatInputModule } from "@angular/material";

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule
    ]
})
export class PagesModule {}
