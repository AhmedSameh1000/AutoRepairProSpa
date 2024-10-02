import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(
    private eventService: EventService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const Lang = localStorage.getItem('lang');
    this.CurrentLanguge = Lang ? Lang : 'en';
  }

  FireEvent(event) {
    const selectedLang = event.target.value;
    this.CurrentLanguge = selectedLang;

    localStorage.setItem('lang', selectedLang);
    this.translate.use(selectedLang);
    console.log(`Language changed to: ${selectedLang}`);

    this.eventService.SubjectEventForChangeLanguge.next(selectedLang);

    // this.updateDirection(selectedLang); // تحديث الاتجاه عند تغيير اللغة
    this.cdr.detectChanges();
  }

  CurrentLanguge: string;
  Languages = [
    { lang: 'en', name: 'English - إنجليزي' },
    { lang: 'ar', name: 'عربي - Arabic' },
  ];
}
