import {collection, getDocs} from 'firebase/firestore';
import {UserCaller} from '../infra/user/UserCaller';
import {UserResource} from '../infra/user/UserResource';
import {db} from '../infra/firebase.config';
import {UserService} from '../primary/user/useCases';

const usercaller = new UserCaller(collection, getDocs, db);
const UserResources = new UserResource(usercaller);
const userService = new UserService(UserResources);

export {userService};
