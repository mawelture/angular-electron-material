import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";

import { MaterialModule } from "../@material/material.module";
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

@NgModule({
    declarations: [PagesComponent, MenuComponent, MenuItemComponent],
    imports: [
        CommonModule,
        PagesRoutingModule,
        MaterialModule
    ]
})
export class PagesModule {}
