import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   constructor(private svc:TestServiceService,private http: HttpClient){
      svc.printtocosole(" service printing");

   }

   ngOnInit()
   {
   let ob = this.http.get('https://api.github.com/users/koushikkothagal');
   ob.subscribe((response )=>console.log(response));
  
   }
}
