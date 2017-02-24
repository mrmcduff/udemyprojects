import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle: string = "Docs Dashboard"
  documents: Document[] = [
    {
      title: "Hello docs",
      description: "this is a hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "Second document",
      description: "this is a second hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    },
    {
      title: "Third document",
      description: "this is a third hello world doc",
      file_url: "https://www.google.com",
      updated_at: "today",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
    }
  ]
}
