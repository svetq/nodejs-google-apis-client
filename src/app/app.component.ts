import { Component } from '@angular/core';
import {OAuth2Client} from 'google-auth-library';
import * as google from 'googleapis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nodejs-google-apis-client';

  ngOnInit(){
      console.log(google, OAuth2Client);
  }
}
