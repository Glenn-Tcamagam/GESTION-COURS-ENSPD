import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { Cours } from 'src/app/cours/models/cours.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { CoursService } from 'src/app/cours/services/cours.service';
import { UpdatePost } from '../models/update-post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  id: string | null= null;
  model?: Post;
  cours$?: Observable<Cours[]>;
  selectedCours?: string[];
  routeSubscription?: Subscription;
  updatePostSubscription?:Subscription;
  getPostSubscription?:Subscription;
  deletePostSubscription?:Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService, private coursService: CoursService){

  }



  
  ngOnInit(): void {
    this.cours$ = this.coursService.getAllCours();

    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) =>{
        this.id= params.get('id');

         // Get BlogPost From API
         if (this.id) {
          // this.getBlogPostSubscription = this.blogPostService.getBlogPostById(this.id)
          this.postService.getPostById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedCours = response.cours.map(x => x.id);
            }
          });
          ;
        }

        

      }
    })
  }


  onFormSubmit(){

    // Convert this model to Request Object
    if (this.model && this.id) {
     var updatePost: UpdatePost = {
      id: this.model.id,
       titre: this.model.titre,
       description: this.model.description,
       auteur: this.model.auteur,
       date: this.model.date,
       
       cours: this.selectedCours ?? []
     };
     this.updatePostSubscription = this.postService.updatePost(this.id, updatePost)
     .subscribe({
       next: (response) => {
         this.router.navigateByUrl('/postlistadmin');
       }
     });
    
   
}
}

onDelete(){
  if (this.id) {
    // call service and delete blogpost
    this.deletePostSubscription = this.postService.deletePost(this.id)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/postlistadmin');
      }
    });
  }
}


  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updatePostSubscription?.unsubscribe();
    this.getPostSubscription?.unsubscribe();
  }
}
