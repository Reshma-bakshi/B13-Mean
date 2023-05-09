import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
//1.structural directive
//*ngIf
  public showtext:any="this data has to show";

  public showFlag:boolean=true;

  public age:number=10;

  public country:any=["India","England","japan","london"];

  public selectedcountry:any="japan";

  public state:any="MH"

  public testClass1:any;

  public testStyle1:any;
  public testStyle2: any = { 'background-color': 'yellow' };
  public testStyle3: any = { 'background-color': 'red' };

  constructor() {

    if (this.age > 18 && !this.showFlag) {
      this.testClass1 = "test1";
      this.testStyle1 = { 'color': 'red' };
    } else {
      this.testClass1 = "test2";
      this.testStyle1 = { 'color': 'black' };
    }

  }
}
