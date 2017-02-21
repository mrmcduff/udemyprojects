import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "Hello docs",
      description: "this is a hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://www.google.com"
    },
    {
      title: "Second document",
      description: "this is a second hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://www.google.com"
    },
    {
      title: "Third document",
      description: "this is a third hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://www.google.com"
    }
  ]
}
