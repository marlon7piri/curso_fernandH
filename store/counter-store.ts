import {count} from 'firebase/firestore';
import {create} from 'zustand';

export interface CounterStore {
  count: number;
  incrementar: (value: number) => void;
}

export const useCounterStore = create<CounterStore>()((set, get) => ({
  count: 0,

  incrementar: (value: number) => {
    console.log(value);
    set(state => ({
      count: state.count + value,
    }));
  },
}));
