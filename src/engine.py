from chess.engine import INFO_ALL
from stockfish import Stockfish
from chess import pgn, Board, engine 
from tqdm import tqdm
import random
import json

# stockfish = Stockfish("stockfish")
stock = engine.SimpleEngine.popen_uci("stockfish")
# print(stockfish.get_best_move_time(5000))
board = Board()

raw = open("lichess_elite_2020-09.pgn", encoding="utf-8")

games = {"games": []}
for i in tqdm(range(10)):
    g = pgn.read_game(raw)
    length = int(str(g.end())[:2])
    rand = random.randint(int(length/4), int(3*length/4))
    board = g.board()
    for move in g.mainline_moves():
        if rand == 0:
            break
        board.push(move)
        rand -= 1
    f = board.fen()
    info = stock.analyse(board, engine.Limit(depth=20), info=engine.INFO_SCORE)
    games["games"].append({"fen": f, "score": int(str(info["score"].relative))})

with open('games.json', 'w') as outfile:
    json.dump(games, outfile)
