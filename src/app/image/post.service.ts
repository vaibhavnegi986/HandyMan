import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, take, tap } from 'rxjs/operators';
import { ServerService } from '../server.service';

export interface postInterface{
  _id:string
  description:string
  imageUrl:string
  hasImage:boolean
  likes:number
  creator:any
}

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {
  url:string = 'https://handy-man-api.onrender.com/'
  // url:string = 'http://localhost:8080/'
  _post=new BehaviorSubject<postInterface[]>([])
  constructor(private http:HttpClient,private server:ServerService) { }
  ngOnInit(){
    this.url = this.server.url
  }
  get post(){
    return this._post.asObservable()
  }

  fetchPost(){
    return this.http.get<{message:string, posts:postInterface[]}>(`${this.url}post/get-posts`)
    .pipe(
      map(res =>{
        let Loadedpost:postInterface[] = []
        res.posts.forEach(post => {
          Loadedpost.push(post)
          
        });
        return Loadedpost
      }),take(1),
      tap(posts=>{
        this._post.next(posts)
      })
    )
  }

  addPost(appendData :FormData){
    return this.http.post(`${this.url}post/create-post`,appendData)
  }

  likePost(postId:string){
    return this.http.put<{posts:postInterface}>(`${this.url}post/like`,{postId:postId})
  }


}
