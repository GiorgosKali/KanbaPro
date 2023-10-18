import { tList, tCard } from "../../../types"
import { useBoardStore } from "../../../store/useBoardStore";
import { useState } from "react";
import Card from "../card/Card"
import { useDrop } from 'react-dnd';
import { Menu } from "@headlessui/react";
import ListMenuItems from "./ListMenuItems";

const List = (list: tList) => {
    const [_, drop] = useDrop<{ card: tCard, listID: string }>({
        accept: 'card',
        drop: (item, _) => {
            // Handle the drop action here (e.g., moving the card to a new list)
            store.moveCard(item.listID, list.id, item.card.id)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const store = useBoardStore();
    const [showAddButton, setShowAddButton] = useState(false);
    return (
        <>
            <div ref={drop} className="p-3 w-96 h-max min-h-[7rem] rounded-lg space-y-4 shadow bg-gray-900 text-slate-400 border border-[#101204] hover:border-slate-700 transition-all duration-50">
                <div className="inline-flex w-full justify-between">
                    {/* Title */}
                    <textarea className="text-xl me-1 w-full font-semibold p-1 h-10 bg-inherit hover:bg-gray-800 focus:bg-[#242424] focus:text-gray-50 resize-none rounded-lg  focus:outline outline-1 outline-[#646cff] "
                        placeholder={list.title}
                        onChange={(e) => { store.updateListTitle(list.id, e.target.value) }} />
                    {/* BUtton */}
                    <Menu as="div" className="relative">
                        <Menu.Button>
                            <button className="text-lg  bg-gray-900 hover:bg-[#242424] focus:bg-[#242424] font-semibold p-2 outline-1 focus:outline outline-[#646cff] ">
                                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                            </button>
                        </Menu.Button>
                        <ListMenuItems listID={list.id} />
                    </Menu>

                </div>
                {/* Cards */}
                {/* {list.cards?.map((card: tCard, index: number) => <Card listID={list.id} card={card} key={index}  />)} */}
                {list.cards?.map((card) => (
                    <Card key={card.id} card={card} listID={list.id} />
                ))}
                {/* Footer */}
                <div className="h-5 hover:h-10 transition-all duration-200 footer text-slate-400  w-full flex justify-center" onMouseOver={() => setShowAddButton(true)} onMouseLeave={() => setShowAddButton(false)}>


                    {showAddButton && <button onClick={() => store.addNewCardtoList(list.id)} className="text-lg rounded-full  hover:text-white flex self-center bg-gray-900 hover:bg-gray-700 active:bg-[#242424] font-semibold p-2 outline-1 active:outline outline-[#646cff] ">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>}
                </div>
            </div>
        </>
    )
}

export default List
