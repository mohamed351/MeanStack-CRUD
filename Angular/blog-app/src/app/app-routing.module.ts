import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { component: PostListComponent, path: "" },
  { component: PostAddComponent, path: "post-add" },
  { component: PostEditComponent, path: "post-edit/:id" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
