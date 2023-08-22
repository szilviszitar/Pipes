import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  date = '';
  amount: number = 0;
  heigth:number=0;
  miles:number=0;

  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.date = value;
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }

  onHeigthChange(value:string){
    this.heigth=parseFloat(value);
  }

  onMilesChange(value:string){
    this.miles=parseFloat(value);
  }
}
