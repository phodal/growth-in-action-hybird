import {Inject} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

export class BlogpostServices {
  private http;

    constructor(@Inject(Http) http:Http) {
        this.http = http
    }

    getBlogpostLists() {
        var url = 'http://127.0.0.1:8000/api/blogpost/?format=json';
        return this.http.get(url).map(res => res.json());
    }
}
