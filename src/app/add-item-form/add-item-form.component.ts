import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {


  newEarnings: number;
  earningsList: Array<number> = [];

  constructor() { }

  addEarnings() {

    this.earningsList.push(this.newEarnings);
    console.log(this.earningsList);


}


  ngOnInit() {

  }


 }





