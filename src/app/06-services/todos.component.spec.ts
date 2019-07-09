import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items received from the server', () => {
    const todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });
});
