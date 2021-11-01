import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Posts } from '../models/post';
import { PostsService } from '../posts.service'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post: Posts[] = null;
  id: any = null;
  constructor(private postService: PostsService, private ngModel: NgbModal) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(a => {
      this.post = a;
    });

  }
  OpenModal(content, id) {
    this.id = id;
    this.ngModel.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      if (result === 1) {
        this.postService.deletePostByID(id).subscribe(c => {
          this.post = null;
          this.postService.getPosts().subscribe(d => {
            this.post = d;
          });
        });
      }
    }, (error) => {
      console.log(error);
    })


  }

}
