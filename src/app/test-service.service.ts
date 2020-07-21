import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  printtocosole(arg){
    console.log(arg);
  }
}
