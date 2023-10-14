import { useBoardStore } from "../../store/useBoardStore";
import Board from "../components/board/Board";
const Home = () => {
  const store = useBoardStore();
  return (
    <>
      <div className="h-screen w-screen ">
        <Board title="Board title" lists={store.lists} />
      </div>
    </>
  )
}

export default Home
