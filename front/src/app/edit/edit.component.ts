import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {AuthenService} from '../service/index';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnChanges {

  editing: boolean = false;
  
  


  constructor(private authenservice: AuthenService) { }

  @Input() note

  ngOnChanges(changes) {

    if (changes.user){

    }

  }

  toggleEdit() {
    
    this.editing = !this.editing;
  }

  

}
