import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { HttpClient } from '@angular/common/http';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService, private http:HttpClient, private BasketService: BasketService ) { }

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id')
    if (basketId) this.BasketService.getBasket(basketId);
    }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
