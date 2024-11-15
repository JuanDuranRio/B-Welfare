import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatIconModule,MatInputModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  
})


export class RegisterComponent   {
  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  

}




