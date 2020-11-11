import { Content } from '../helper-files/content-interface';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContent: Content;
  emptyTitle: Boolean;
  emptyAuthor: Boolean;
  emptyBody: Boolean;

  constructor() { 
    this.newContent = {
      id: 0,
      title: '',
      body: '', 
      type:'',
      tags: [],
      author:'',
      imgUrl:''
    };

    this.emptyTitle = false
    this.emptyAuthor = false
    this.emptyBody = false
  }

  ngOnInit(): void {
  }

  addContent(): void{
    this.emptyAuthor = this.emptyTitle = this.emptyBody = false;
  
    const formPromise = new Promise((success, fail) => {
      if(this.newContent.title == '' ){
        this.emptyTitle=true;
      }
      if(this.newContent.body == '' ){
        this.emptyBody=true;
      }
      if(this.newContent.author == '' ){
        this.emptyAuthor=true;
      }
   

      if(!this.emptyTitle && !this.emptyBody && !this.emptyAuthor){
        this.newContentEvent.emit(this.newContent)
        success('Added the content with the title: ' + this.newContent.title);
      } else {
        fail('Please fill in all the required fields');
      }
    });
      formPromise.then((successResult: String) => console.log('Yay',successResult))
      .catch((failResult: String) => console.log('Error:',failResult));

  }

}
