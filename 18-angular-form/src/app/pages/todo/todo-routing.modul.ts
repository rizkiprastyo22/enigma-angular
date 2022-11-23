import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoFormComponent } from "./form/todo-form.component";
import { TodoListComponent } from "./list/todo-list.component";
import { TodoComponent } from "./todo.component";

const routes: Routes = [
    {
        path: '',
        component: TodoComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TodoRoutingModule {}