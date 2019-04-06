import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
    { path: "pages", component: PagesComponent },
    { path: "", redirectTo: "pages", pathMatch: "full" },
    { path: "**", redirectTo: "pages" }
];

const config: ExtraOptions = {
    useHash: true
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
