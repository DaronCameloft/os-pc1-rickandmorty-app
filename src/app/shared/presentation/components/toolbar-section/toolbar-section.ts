import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar-section',
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    TranslatePipe,
    MatToolbar
  ],
  templateUrl: './toolbar-section.html',
  styleUrl: './toolbar-section.css',
})
export class ToolbarSection {
  protected currentLanguage= 'en';

  private readonly translate = inject(TranslateService);

  protected changeLanguage(language: 'en' | 'es'): void{
    this.currentLanguage = language;
    this.translate.use(language);
  }

  protected readonly toolbar = toolbar;
}
