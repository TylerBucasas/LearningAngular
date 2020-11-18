import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CONTENTLIST } from '../helper-files/contentDb';
import { ContentService } from '../service/content.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  selectedContent: Content;

  performSearch(string : String) {
    for(let i= 0; i < this.contentList.length; i++){
      if(this.contentList[i].title.toLowerCase() === string.toLowerCase()){
        this.contentList[i].found=true;
        console.log("title " + string + " exists");
      }else{
        this.contentList[i].found=false;

      }
    }
  }

  constructor(private contentService: ContentService, private messageService: MessageService) { 
    

  }


  ngOnInit(): void{
    // this.contentList = this.contentService.getContent();
    this.contentService.getContentObs().subscribe(cl => this.contentList = cl);
    // this.getContent();
  }

  onSelect(content: Content): void{
    this.selectedContent = content;
    this.messageService.add(`Selected Content id = ${content.id}`);
  }

  

  



}
