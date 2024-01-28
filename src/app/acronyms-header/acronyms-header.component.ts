import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Acronym } from '../interface/acronym-if';

@Component({
  selector: 'app-acronyms-header',
  standalone: true,
  imports: [],
  templateUrl: './acronyms-header.component.html',
  styleUrl: './acronyms-header.component.css'
})
export class AcronymsHeaderComponent {
  @Output() eventClicked = new EventEmitter<Event>(); // child back up to parent communication

  onClick = (event: Event) => {
    console.log("header-component: onClick.  emitting event");
    event.preventDefault();
    this.eventClicked.emit(event);
  }

  newAcronym() {
    console.log("new acronym");
  }
}
