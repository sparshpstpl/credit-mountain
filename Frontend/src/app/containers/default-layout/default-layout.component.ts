import {Component} from '@angular/core';
import { navItems } from '@app/_nav';
import { AppConfig } from '@app/config';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems  = navItems;
  public appConfig = AppConfig;
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
