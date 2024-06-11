import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  styles: `
    :host {
      display: block;
    }
  `,
  template: `<div class="f flex flex-col items-center justify-center p-8">
    <img class="mb-1 h-40" src="assets/square.PNG" alt="sepator" />
    <div class="font-title text-3xl text-secondary">Séverine & Serge</div>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
