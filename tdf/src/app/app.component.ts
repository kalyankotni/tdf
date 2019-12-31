import { Component } from '@angular/core';
import {User} from './user';
import {EnrollmentService} from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics= ['Angular','react','VUE'];
  topicHasError=true;
 constructor(private enrollment: EnrollmentService){}
  userModel = new User('','kalyan@test.com',6536566362,'default','morning',true);
  validateTopic(value){
    if(value === 'default'){
      this.topicHasError= true;
    }else{
      this.topicHasError= false;
    }
  }
  noSubmit(){
  this.enrollment.enroll(this.userModel).subscribe(
    data=> console.log('|Success',data),
    error => console.log('error!', error)
  )
  }
}
