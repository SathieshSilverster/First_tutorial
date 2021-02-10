import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  result: any;

  constructor(
    private storage: Storage
  ) { }

  ngOnInit() {
  }
  onSubmit(data){
    let addValue = Number(data.val1)+Number(data.val2)
    this.result = addValue
    this.storage.set('result', this.result );
  }
}
