import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  messageForm: FormGroup
  submitted =false
  success=false
  itemValue=''
  items: Observable<any[]> 

  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('items').valueChanges()
    console.log(this.items)
  }

  onSubmit(){
    this.submitted = true
    if(this.messageForm.invalid){
      return
    }
    this.success =true
  }

  ngOnInit() {
  }

}
