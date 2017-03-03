import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Docs Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }
  // documents: Document[] = [
  //   {
  //     title: "Hello docs",
  //     description: "this is a hello world doc",
  //     file_url: "https://www.google.com",
  //     updated_at: "today",
  //     image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
  //   },
  //   {
  //     title: "Second document",
  //     description: "this is a second hello world doc",
  //     file_url: "https://www.google.com",
  //     updated_at: "today",
  //     image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
  //   },
  //   {
  //     title: "Third document",
  //     description: "this is a third hello world doc",
  //     file_url: "https://www.google.com",
  //     updated_at: "today",
  //     image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg"
  //   }
  // ]
}
