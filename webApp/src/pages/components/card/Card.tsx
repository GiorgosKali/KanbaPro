import { useBoardStore } from "../../../store/useBoardStore"
import { tCard } from "../../../types"
const Card = ({ card, listID }: { card: tCard, listID: string }) => {
    const store = useBoardStore();
    return (
        <>
            <div className="group/card p-3 w-full rounded-lg space-y-4 shadow bg-gray-700 text-slate-300 border border-[#101204] hover:border-slate-400 transition-all duration-50">
                <div className="flex justify-between ">
                    {/* Title */}
                    <textarea className="text-lg w-full me-1 font-semibold p-1 h-9 bg-inherit hover:bg-gray-600 focus:bg-[#242424] resize-none rounded-lg  focus:outline outline-1 outline-[#646cff] focus:text-gray-50"
                        value={card.title}
                        onChange={(e) => { store.updateCard(listID, card.id, e.target.value, undefined) }}
                    />
                    {/* Button */}
                    <button onClick={() => { store.deleteCard(listID, card.id) }} className="hidden  group-hover/card:block text-lg bg-gray-700 hover:bg-gray-600 active:bg-[#242424] font-semibold p-1 outline-1 active:outline  outline-[#646cff] ">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>

                </div>
                {/* Body */}
                <textarea className=" p-1 text-md font-semibold w-full min-h-full bg-gray-700 hover:bg-gray-600 focus:bg-[#242424] focus:outline outline-1 outline-[#646cff] rounded-lg focus:text-gray-50"
                    value={card.body}
                    onChange={(e) => { store.updateCard(listID, card.id, undefined ,e.target.value) }}
                />

            </div>
        </>
    )
}

export default Card
