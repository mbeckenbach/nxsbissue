import { Component, Input } from '@angular/core';
import { Todo } from '@acme/data';

@Component({
  selector: 'acme-todos',
  templateUrl: './todos.component.html',
  styleUrls: [ './todos.component.scss' ],
})
export class TodosComponent {

  @Input() todos: Todo[] = [];

}
