import { Content } from './content-interface';

export class ContentList {
    private _items: Content[];

    constructor(){
        this._items = [];
    }

    get items(): Content[]{
        return this._items;
    }

     add(item: Content) {
        return this._items.push(item);
    }

    size(){
        return this._items.length;
    }

    display(index: number){
        return this._items[index];
    }

    format(id: number): string {
            if(id >= this.size()){
                return '<p>The index is outside of the boundries</p>'
            }

        return '<h1>ID: ' + this._items[id].id + '</h1>' + 
                '<h2>Author: ' + this._items[id].author + '</h2>' + 
                '<h2>Title: ' + this._items[id].title + '</h2>' + 
                '<img src = "'+this._items[id].imgUrl+'"> <br>' + 
                '<span>'+ this._items[id].tags +'</span>' +
                '<h2>Body: ' + this._items[id].body + '</h2>'
    }

    


}