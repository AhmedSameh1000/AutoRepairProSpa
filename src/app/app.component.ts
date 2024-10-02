import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from './Services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    public router: Router,
    public authService: AuthService,
    private translate: TranslateService,
    private EventService: EventService
  ) {}
  public isCollapsed = false;
  public innerWidth: number = 0;
  public defaultSidebar: string = '';
  public showMobileMenu = false;
  public expandLogo = false;
  public sidebartype = 'full';

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    this.EventService.SubjectEventForChangeLanguge.subscribe({
      next: (res: any) => {
        localStorage.setItem('lang', res);
        // document.body.dir = res == 'ar' ? 'rtl' : 'ltr';
        this.translate.use(res);
        location.reload();
      },
    });
    var Lang = localStorage.getItem('lang');
    if (Lang == null || Lang == undefined) {
      this.translate.use('en');
    } else {
      this.translate.use(Lang);
    }
    this.defaultSidebar = this.sidebartype;
    this.handleSidebar();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.sidebartype = 'full';
    } else {
      this.sidebartype = this.defaultSidebar;
    }
  }

  toggleSidebarType() {
    switch (this.sidebartype) {
      case 'full':
        this.sidebartype = 'mini-sidebar';
        break;

      case 'mini-sidebar':
        this.sidebartype = 'full';
        break;

      default:
    }
  }
}
