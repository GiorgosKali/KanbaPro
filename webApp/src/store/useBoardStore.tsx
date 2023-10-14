import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { tCard, tList } from '../types';
import { v4 as uuidv4 } from 'uuid';
const card: tCard = {
  id: uuidv4(),
  title: "Card title",
  body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam reprehenderit veniam recusandae odit quisquam laborum consectetur quis quaerat cum accusantium alias nobis, dolore minima rerum laboriosam voluptatem in consequuntur saepe."
};
const list: tList = {
  id: uuidv4(),
  title: "List Title",
  cards: [card]
};
export const useBoardStore = create(
  combine({ lists: [list] }, (set, get) => ({
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
    deleteCardfromList: (listID: string, cardID: string) => {
      const lists = get().lists
      const list = lists.find((list) => listID === list.id)
      if (!list) return
      list.cards = list.cards?.filter((card) => card.id !== cardID)

      set(() => ({
        lists: lists
      }))
    }
  })))
