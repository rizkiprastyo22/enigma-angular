import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentAComponent } from "./component-a/component-a.component";
import { ComponentBComponent } from "./component-b/component-b.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: 'component-a',
        pathMatch: "full"
    },
    {
        path: 'component-a',
        component: ComponentAComponent
    },
    {
        path: 'component-b',
        component: ComponentBComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DemoRoutingModule {}