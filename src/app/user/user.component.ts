import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // select = output<string>();

  @Input({required : true}) user! : User;
  @Input({required: true}) selected! : boolean;
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar;
  // })


  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
