import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss'
})
export class MissionComponent {
  safeURL: SafeResourceUrl;

  videoUrl = 'https://www.youtube.com/embed/your-videoId'
  constructor(private _sanitizer: DomSanitizer) {
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

}