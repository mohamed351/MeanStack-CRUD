import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  get Title() {
    return this.form.get("title");
  }
  get Description() {
    return this.form.get("description");


  }

  constructor(private PostsService: PostsService, private router: Router) { }

  ngOnInit(): void {

  }
  SubmitData() {
    this.PostsService.addPost(this.form.value).subscribe(options => {
      this.router.navigate(["/"]);
    });
  }

}
