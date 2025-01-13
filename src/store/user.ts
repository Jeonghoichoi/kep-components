import create from 'zustand';
import { User } from '@/interfaces/UserInterface';
export const useStore = create<User>(() => ({
  mem_id: 'admin',
  password: '123456',
  grd: 1,
  bymd: '2000-12-31',
  home_addr: 'admin',
  email: 'ceo@kyobobook.com',
  isLogin: false,
}));
