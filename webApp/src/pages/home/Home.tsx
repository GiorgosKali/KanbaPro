import { useBoardStore } from "../../store/useBoardStore";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from "../components/board/Board";
const Home = () => {
  const store = useBoardStore();
  return (
    <>
      <div className="h-screen w-screen ">
        <DndProvider backend={HTML5Backend}>
          <Board title="Board title" lists={store.lists} />
        </DndProvider>
      </div>
    </>
  )
}

export default Home
