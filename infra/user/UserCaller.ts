import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth, collection, db} from '../firebase.config';
import {ApiUser} from './ApiUser';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  Query,
  QuerySnapshot,
  addDoc,
} from 'firebase/firestore';

export class UserCaller {
  constructor(
    public readonly collection: (
      firestore: Firestore,
      path: string,
      ...pathSegments: string[]
    ) => CollectionReference<DocumentData>,
    public readonly getDocs: (
      query: Query<DocumentData>,
    ) => Promise<QuerySnapshot<DocumentData>>,
    public readonly db: Firestore,
  ) {}

  async createUser(
    username: string,
    email: string,
    password: string,
  ): Promise<ApiUser> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      if (user) {
        await updateProfile(user, {displayName: username});

        const userCollection = collection(db, 'users');
        await addDoc(userCollection, {
          uid: user.uid,
          email: user.email,
          username: username,
        });

        return {id: user.uid, username: username, email: email};
      } else {
        throw new Error('Error creating the user');
      }
    } catch (error) {
      throw new Error('Error creating the user');
    }
  }

  async logout(): Promise<void> {
    await auth.signOut();
  }
}
