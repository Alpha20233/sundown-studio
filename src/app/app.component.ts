import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SunStudio';
  scroll;
  @ViewChild('scrollContent') scrollContent: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      import('locomotive-scroll').then(lib => {
        this.scroll = new lib.default({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true
        });

        import('@juggle/resize-observer').then(lib => {
          const ro = new lib.ResizeObserver((entries, observer) => {
            entries.forEach((entry, index) => {
              const { inlineSize: width, blockSize: height } = entry.contentBoxSize[0];
              if (this.scroll) {
                this.scroll.update();
              }
            });
          });

          ro.observe(this.scrollContent.nativeElement);
        });

      }).catch(error => {
        console.error('Error importing locomotive-scroll:', error);
      });
    }
  }
}
