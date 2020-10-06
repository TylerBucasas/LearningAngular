import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList;
  showHtml: string;
  constructor() {
    this.contentList = new ContentList();

    this.contentList.add({
      id: 0,
      author: 'Tyler',
      imgUrl: 'https://cdn.pixabay.com/photo/2016/02/19/15/57/man-1210600_1280.jpg',
      tags: ['basketball', 'philipines', 'programming'],
      title: 'Title for Tyler',
      body: 'Body for Tyler'
    });

    this.contentList.add({
      id: 1,
      author: 'Jimmy',
      imgUrl: 'https://media.istockphoto.com/photos/portrait-of-albanian-man-with-traditional-clothes-riding-a-horse-in-picture-id1269774486',
      tags: ['albania', 'steve jobs', 'programming'],
      title: 'Jimmy for Jimmy',
      body: 'Body for Jimmy'
    });

    this.contentList.add({
      id: 2,
      author: 'Ali',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/01/31/18/17/arabs-618749_1280.jpg',
      tags: ['middle eastern', 'smart', 'programming'],
      title: 'Title for Ali',
      body: 'Body for Ali'
    });

    this.contentList.add({
      id: 3,
      author: 'Abel',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/27/22/53/man-742766_1280.jpg',
      tags: ['canadian', 'homeschool', 'programming'],
      title: 'Title for Abel',
      body: 'Body for Abel'
    });

    this.showHtml = this.contentList.format(0) + this.contentList.format(1) + this.contentList.format(2) + this.contentList.format(3) + this.contentList.format(5);

   }
   

  ngOnInit(): void {
  }

}
