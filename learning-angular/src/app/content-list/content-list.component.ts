import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentList: Content[];
  constructor() { 

    this.contentList = [
      {
        id: 0,
        author: 'Tyler',
        imgUrl: 'https://cdn.pixabay.com/photo/2016/02/19/15/57/man-1210600_1280.jpg',
        tags: ['basketball', 'philipines', 'programming'],
        title: 'Tyler',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus neque risus, condimentum ac consectetur sit amet, dignissim at quam. In est ante, aliquet at accumsan quis, congue a orci. Praesent quis eros sit amet nunc vehicula molestie ac eget turpis. Curabitur venenatis at odio et efficitur. Morbi iaculis venenatis quam, id sagittis ex hendrerit vel. Nullam bibendum dignissim neque interdum rutrum. Suspendisse malesuada, est id pellentesque vestibulum, leo enim egestas arcu, eget commodo ante metus sit amet eros. Proin eget neque finibus elit bibendum semper quis quis leo. Nulla vitae consectetur turpis, ac pulvinar erat. Pellentesque aliquet leo vitae lorem volutpat, nec auctor leo malesuada. Praesent sollicitudin dolor eu ultrices varius. Donec elementum neque metus. Aliquam erat volutpat. Aenean in dui dapibus erat vehicula lobortis. Proin in accumsan felis. Proin egestas orci vitae sodales mollis.',
        type: 'Filipino News'
      },

      {
        id: 1,
        author: 'Jimmy',
        imgUrl: 'https://media.istockphoto.com/photos/portrait-of-albanian-man-with-traditional-clothes-riding-a-horse-in-picture-id1269774486',
        tags: ['albania', 'steve jobs', 'programming'],
        title: 'Jimmy',
        body: 'Aenean venenatis egestas nulla, id convallis magna faucibus ac. Praesent faucibus facilisis odio, nec euismod nisi imperdiet sed. Duis varius pellentesque tellus, in lacinia sem viverra ac. Praesent congue nibh libero, sed tempor felis pulvinar ac. Vestibulum placerat mauris eget mattis tristique. Nullam elementum vitae sapien eu malesuada. Nam interdum tellus vitae mattis aliquet. Nullam efficitur rhoncus massa congue mattis. Etiam ornare massa eget nisl gravida, at aliquet libero posuere. Suspendisse a mollis neque. In hac habitasse platea dictumst. Phasellus a sem at risus eleifend accumsan et imperdiet neque. Donec eget ultricies lacus. Etiam et blandit augue. Etiam sollicitudin at neque nec imperdiet.',
        type: 'Albanian News'
      },

      {
        id: 2,
        author: 'Ali',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/01/31/18/17/arabs-618749_1280.jpg',
        tags: ['middle eastern', 'smart', 'programming'],
        title: 'Ali',
        body: 'Nam et odio accumsan, sagittis risus non, pulvinar ante. Praesent non augue vitae dui posuere tristique. Proin tempor fringilla aliquet. In interdum odio est, non blandit tortor cursus ac. Sed vehicula quam ac dui commodo mattis. Morbi ligula arcu, lobortis non tempor at, aliquet id lacus. Morbi bibendum metus id viverra cursus. Pellentesque molestie ut erat vel lacinia. Aenean ipsum est, aliquet elementum elementum eget, placerat vel elit. Donec suscipit massa id fringilla luctus.',
      },

      {
        id: 3,
        author: 'Abel',
        imgUrl: 'https://cdn.pixabay.com/photo/2015/04/27/22/53/man-742766_1280.jpg',
        tags: ['canadian', 'homeschool', 'programming'],
        title: 'Abel',
        body: 'Pellentesque faucibus condimentum lacus a vehicula. Mauris vel condimentum ipsum, eu accumsan orci. Aenean vestibulum nisl nec consectetur tempor. Sed et placerat tellus, in gravida ex. Etiam faucibus eu ipsum vel dictum. Quisque elementum semper dui, non posuere purus convallis in. Nullam vitae hendrerit velit, id hendrerit nisl. Vestibulum lobortis convallis augue. Donec orci leo, cursus a suscipit ut, fermentum in mauris. Mauris sit amet erat vitae ante sollicitudin feugiat luctus sit amet nunc.',
        type: 'Canadian News'
      },

      {
        id: 4,
        author: 'Josh',
        imgUrl: 'https://cdn.pixabay.com/photo/2020/09/07/18/08/man-5552541_1280.jpg',
        tags: ['canadian', 'homeschool', 'church'],
        title: 'Josh',
        body: 'Fusce urna libero, tempor eget laoreet in, pulvinar eget quam. Pellentesque ut dui sed nunc suscipit feugiat. Ut faucibus egestas ex a consequat. Nulla et finibus metus, nec ultricies urna. Suspendisse nunc odio, convallis sit amet turpis in, sollicitudin sodales ante. Suspendisse potenti. Cras non consectetur ex.',
        type: 'Biblical News'
      }




    ]

  }

  ngOnInit(): void {
  }

}
