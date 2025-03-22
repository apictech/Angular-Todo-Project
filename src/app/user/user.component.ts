import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';


// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // select = output<string>();

  @Input({required : true}) user! : User;
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
