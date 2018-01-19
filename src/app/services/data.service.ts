import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {
  constructor(private url: string, private http: Http) { }

  getAll() {
    //1 hover mouse on this return ANY
    //2 if we comment map and catch it returns OBESERVobservableABLES<Response> because http.get return observables<Response>
    //3 if we comment only catch we get a return observable<ANY> because response.json() return observables<ANY>
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  get(id) { 
    return this.http.get(this.url + '/' + id)
      .map(response => response.json())
      .catch(this.handleError);    
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
      .map(response => response.json())
      .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(response => response.json())      
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
      .map(response => response.json())
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
