import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { MatGridListModule, MatInputModule } from "@angular/material";

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MatGridListModule,
        MatInputModule
    ]
})
export class PagesModule {}
