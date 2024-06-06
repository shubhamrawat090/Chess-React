import "./App.css";
import ChessBoard from "./components/ChessBoard";
import { ChessLogic } from "./services/chess-logic";

function App() {
  const game = new ChessLogic();
  return (
    <div className="App">
      <ChessBoard game={game} />
    </div>
  );
}

export default App;
