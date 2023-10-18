import { useBoardStore } from "../../../store/useBoardStore";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { TrashIcon } from '@heroicons/react/24/solid'
const ListMenuItems = ({ listID }: { listID: string }) => {
  const store = useBoardStore();

  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 top-14 w-56 origin-top-right divide-y divide-gray-100 rounded-md active:border active:border-[#646cff] shadow-lg ">

        <Menu.Item>
          <button onClick={() => { store.deleteList(listID) }}
            className={`group flex w-full items-center rounded-md px-2 py-2 hover:bg-[#161616]  hover:border-slate-900  hover:text-white text-sm`}>
            <TrashIcon
              className="mr-2 h-5 w-5 text-red-900 "
              aria-hidden="true"
            />
            Delete
          </button>
        </Menu.Item>
      </Menu.Items>
    </Transition>
  )
}

export default ListMenuItems
