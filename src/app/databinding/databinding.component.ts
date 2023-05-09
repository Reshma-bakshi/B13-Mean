import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
 //1.Interpolation binding
  public sample:any="Reshma";

  public num:any=50;

  public Sampletext:any=""

  public link:any=""

  public path:any=""

  public fname:any




  constructor(){
    //Interpolation
    this.Sampletext="this is interpolation binding";

    //proprty binding
    this.link="http://www.google.com"

    this.path="https://burst.shopifycdn.com/photos/pink-rose-on-pink.jpg?width=1200&format=pjpg&exif=1&iptc=1"

  }
  OnClick(){
    document.write("this is click event");
  }

}
