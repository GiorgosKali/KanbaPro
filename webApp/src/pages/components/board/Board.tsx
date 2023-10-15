import { tBoard, tList } from "../../../types"
import List from "../list/List"
import { useBoardStore } from "../../../store/useBoardStore";

const Board = (board: tBoard) => {

    const store = useBoardStore();
    return (
        <>
            <div className="p-3 h-max min-h-full min-w-full w-max space-y-4 shadow bg-[#242424] text-slate-400 border border-[#242424] hover:border-slate-700 transition duration-500">
                <div>{board.title}</div>
                <div className="inline-flex  space-x-2">
                    {board.lists?.map((list: tList, index: number) => <div key={index} className="snap-center"> <List id={list.id} title={list.title} cards={list.cards} /></div>)}

                    <button onClick={() => store.addList()} className="w-96 h-max bg:gray-900 hover:bg-gray-900 transition hover:border-slate-700 hover:text-gray-50  font-semibold p-2 outline-1 active:outline outline-[#646cff] " >Add list</button>
                </div>
            </div>

        </>
    )
}

export default Board
