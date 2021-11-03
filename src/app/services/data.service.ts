import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc, DocumentData, DocumentReference } from '@firebase/firestore';
import { Observable } from 'rxjs';

export interface Post {
  id?: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private firestore: Firestore) {}

  getPosts(): Observable<Post[]> {
    const postsRef = collection(this.firestore, 'posts');
    return collectionData(postsRef, {
      idField: 'id',
    }) as Observable<Post[]>;
  }

  getPostById(id: string): Observable<Post> {
    const postDocRef = doc(this.firestore, `notes: ${id}`);
    return docData(postDocRef, {
      idField: 'id',
    }) as Observable<Post>;
  }

  addPost(post: Post) {
    const postsRef = collection(this.firestore, 'notes');
    return addDoc(postsRef, post);
  }

  updatePost(post: Post) {
    const postDocRef = doc(this.firestore, `posts/${post.id}`);
    return this.updateDoc(postDocRef, { title: post.title, description: post.description });
  }
  updateDoc(postDocRef: DocumentReference<DocumentData>, arg1: { title: string; description: string; }) {
    throw new Error('Method not implemented.');
  }

  deletePost(post: Post) {
    const postDocRef = doc(this.firestore, `posts/${post.id}`);
    return deleteDoc(postDocRef);
  }
}
