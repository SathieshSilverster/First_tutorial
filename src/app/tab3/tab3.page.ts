import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
 
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  result: any;

  constructor(
    private storage:Storage
  ) {}

  async getData(){
    this.storage.get('result').then((result) => {
      console.log(result.type);
      this.result = result
    });
    
  }
}
