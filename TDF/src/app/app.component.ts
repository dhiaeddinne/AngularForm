import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics=['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User('', 'dhia@gmail.com', 1111111111, 'default', 'Morning', true);

  
  validateTopic(value){
    if (value === 'default'){
      this.topicHasError = true;
    }else{
      this.topicHasError = false;
    }
  }
}
