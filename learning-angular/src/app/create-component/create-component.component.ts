import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../service/content.service';
import { MessageService } from '../message.service'
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { config } from 'process';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.scss']
})
export class CreateComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<String>();
  newContent: any;

  constructor(private contentService: ContentService, private messageService: MessageService, public dialog: MatDialog) {
    this.newContent = {
      title: '',
      imageUrl: ''
    };
   }

  ngOnInit(): void {
  }

  openAddContentDialog(): void{
    const contentDialogRef = this.dialog.open(AddContentDialog, {
      width: '400px;'
    });

    contentDialogRef.afterClosed().subscribe(newContentFromDialog => {
      this.newContent = newContentFromDialog;
      if(this.newContent){
        this.addContent();
      }
    })
  }


  addContent(): void {
    let newContentFromServer: Content;
    console.log("Trying to add the new content to the list", this.newContent);
    this.contentService.addContent(this.newContent).subscribe(serverContent => {
      this.messageService.add("Added the content to list");

      newContentFromServer = serverContent;
      newContentFromServer.tags = [newContentFromServer.tags[0]]
      this.newContentEvent.emit(newContentFromServer);
    })
  }

  updateContent(): void{
    this.newContent.id = +this.newContent.id;
    console.log("trying to update the content list", this.newContent);
    this.contentService.updateContent(this.newContent).subscribe(_ => {
      this.messageService.add('Content updated');

      this.updateContentEvent.emit("Content that was updated should be id: " + this.newContent.id);
    });
  }
}

  @Component({
    selector: 'add-content-dialog',
    templateUrl: 'add-content-dialog.component.html'
  })
  export class AddContentDialog {
    newContent: any;
  
    constructor(public dialogRef: MatDialogRef<AddContentDialog>) {
        this.newContent = {
          title: '',
          imageUrl: ''
        };
       }
  
    onNoClick(): void {
      this.dialogRef.close();

    };
  };

