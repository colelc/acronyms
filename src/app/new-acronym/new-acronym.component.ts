import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-new-acronym',
  standalone: true,
  imports: [],
  templateUrl: './new-acronym.component.html',
  styleUrl: './new-acronym.component.css'
})
export class NewAcronymComponent implements OnInit {

  ngOnInit(): void {
    console.log("NewAcronym ngOnInit");
  }

}
