import "./App.css";
import ChessBoard from "./components/ChessBoard";
import { ChessLogic } from "./services/ChessLogic/ChessLogic.service";

function App() {
  const game = new ChessLogic();
  return (
    <div className="App">
      <ChessBoard game={game} />
    </div>
  );
}

export default App;
