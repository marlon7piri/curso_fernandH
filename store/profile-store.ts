import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
  restarProfile: (email: string, name: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
  name: 'Jhon Doe',
  email: 'jhon@gmail.com',
  restarProfile: (email: string, name: string) => {
    console.log(get());
    set({email, name});
  },
}));
