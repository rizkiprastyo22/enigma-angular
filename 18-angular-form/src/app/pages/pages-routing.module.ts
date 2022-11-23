import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: 'home',
        pathMatch: "full"
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
      path: 'todo',
      loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}