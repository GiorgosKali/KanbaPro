import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { tList } from '../types';
import { v4 as uuidv4 } from 'uuid';
const lists: tList[] = [];
export const useBoardStore = create(
  combine({ lists }, (set, get) => ({
    addList: () => set((state) => ({
      lists: [...state.lists, { id: uuidv4(), title: "New List", cards: [] }]
    })),
    addNewCardtoList: (listID: string) => {
      const lists = get().lists
      const list = lists.find((list) => listID === list.id)
      if (!list) return
      list.cards = list.cards ? [...list.cards, { id: uuidv4(), title: "New Card", body: "" }] : [{ id: uuidv4(), title: "New Card", body: "" }]
      set(() => ({
        lists: lists
      }))
    },
    deleteCard: (listID: string, cardID: string) => {
      const lists = get().lists
      const list = lists.find((list) => listID === list.id)
      if (!list) return
      list.cards = list.cards?.filter((card) => card.id !== cardID)

      set(() => ({
        lists: lists
      }))
    }, updateCard: (listID: string, cardID: string, title?: string, body?: string) => {
      const lists = get().lists;
      const list = lists.find((list) => listID === list.id);
      if (!list) return;

      const card = list.cards?.find((c) => c.id === cardID);
      if (!card) return;

      card.title = title !== undefined ? title : card.title;
      card.body = body !== undefined ? body : card.body;

      set(() => ({
        lists: lists
      }));
    },
    updateListTitle: (listID: string, title: string) => {
      const lists = get().lists;
      const list = lists.find((list) => listID === list.id);
      if (!list) return;

      list.title =  title
      set(() => ({
        lists: lists
      }));
    }
  })))
