import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DotsComponent } from '../shared/ui/dots.component';
import { PageComponent } from '../shared/ui/page.component';

@Component({
  selector: 'app-wedding-details',
  standalone: true,
  template: `<app-page>
    <img
      class="mb-12 hidden h-72 w-full object-cover sm:block xl:h-96"
      src="assets/photo-home.jpg"
      alt="Photo du lieu ici"
    />
    <img
      class="mx-auto mb-12 block aspect-video max-w-full object-cover sm:hidden"
      src="assets/photo-home.jpg"
      alt="Photo du lieu ici"
    />
    <h1 class="text-center">Le Grand Jour !</h1>
    <h1 class="-mt-8 text-center text-5xl text-secondary">
      Le plus grand bonheur est celui que l'on partage !
    </h1>
    <div
      class="flex flex-col items-center justify-center text-center xl:flex-row-reverse xl:items-start xl:overflow-hidden xl:rounded-xl xl:bg-white xl:text-left"
    >
      <div class="flex flex-col xl:mx-12 xl:my-8 xl:flex-1">
        <h2 class="text-secondary">La cérémonie religieuse</h2>
        <p>Nous vous attendons à 15 h !</p>
        <p>En l'église de Notre Dame de Chamalières,</p>
        <p class="italic">
          Place Sully, <br />
          63400 Chamalières
        </p>
      </div>
      <!-- <iframe
        class="mt-3 h-96 w-full max-w-full xl:mt-0 xl:max-w-lg"
        src="https://www.google.com/maps/d/u/0/embed?mid=1SujMwO3DWVg4oWTYF-2VMIJ5snd9l7A&ehbc=2E312F&noprof=1&z=17"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe> -->
      <iframe
        class="mt-3 h-96 w-full max-w-full xl:mt-0 xl:max-w-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.6863073386103!2d3.065764856622585!3d45.776627846108205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f71bcd969b6bef%3A0x59f7561df831ab20!2sEglise%20Notre-Dame%20de%20Chamali%C3%A8res!5e0!3m2!1sfr!2sfr!4v1718103928581!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <app-dots class="mx-auto my-6" [amount]="3"></app-dots>
    <div
      class="flex flex-col items-center justify-center text-center xl:flex-row xl:items-start xl:overflow-hidden xl:rounded-xl xl:bg-white xl:text-left"
    >
      <div class="flex flex-col xl:mx-12 xl:my-8 xl:flex-1">
        <h2 class="text-secondary">La réception</h2>
        <p class="lg:text-justify">
          À l'issue de la cérémonie, à partir de 18h, nous vous convions à partager avec nous un
          moment délicieux, convivial et musical.
        </p>
        <p class="lg:text-justify">
          Nous prolongerons cette journée inoubliable autour d'un dîner et d'une grande fête
          jusqu'au bout de la nuit.
        </p>
        <p class="text-center italic">Au château de Féligonde à 63530 Sayat</p>
      </div>

      <iframe
        class="mt-3 h-96 w-full max-w-full xl:mt-0 xl:max-w-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1168.731209829151!2d3.050260087111667!3d45.83674877392444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f7184c0de2dd71%3A0x32aad5cd0f1028cf!2sChateau%20de%20F%C3%A9ligonde!5e0!3m2!1sfr!2sfr!4v1718104758885!5m2!1sfr!2sfr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </app-page>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageComponent, DotsComponent],
})
export class WeddingDetailsComponent {}
