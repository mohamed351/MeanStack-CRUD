import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    _id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });
  get Id() {
    return this.form.get("_id");
  }
  get Title() {
    return this.form.get("title");
  }
  get Description() {
    return this.form.get("description");

  }
  constructor(private postService: PostsService, private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(a => {

      this.postService.getByID(a.id).subscribe(c => {
        this.Id.setValue(c._id);
        this.Title.setValue(c.title);
        this.Description.setValue(c.description);
      })

    });

  }
  SubmitData() {
    this.postService.editPost(this.Id.value, this.form.value).subscribe(a => {
      this.router.navigate(["/"]);
    });
  }

}
