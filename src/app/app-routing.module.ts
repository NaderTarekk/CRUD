import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { TableComponent } from './components/table/table.component';
import { UpgradeUserComponent } from './components/upgrade-user/upgrade-user.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  { path: "", component: TableComponent },
  { path: "table", component: TableComponent },
  { path: "addUser", component: AddUserComponent },
  { path: "view/:id", component: ViewComponent },
  { path: "upgrade/:id", component: UpgradeUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
