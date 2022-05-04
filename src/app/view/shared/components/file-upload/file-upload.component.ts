import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {

  @Output() fileUploadEvent = new EventEmitter<File>();

  constructor() {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      const file: File = input.files[0];

      this.fileUploadEvent.emit(file);
    }
  }
}
