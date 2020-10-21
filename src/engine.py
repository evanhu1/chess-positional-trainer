from chess.engine import INFO_ALL
from stockfish import Stockfish
from chess import pgn, Board, engine 
from tqdm import tqdm
import random
import json
import pathlib

stock = engine.SimpleEngine.popen_uci(str(pathlib.Path().absolute())+"/stockfish12")
board = Board()
raw = open("lichess_elite_2020-09.pgn", encoding="utf-8")
games = {"games": []}

for i in tqdm(range(1000)):
    g = pgn.read_game(raw)
    try:
        length = int(str(g.end()).split('.')[0])
    except ValueError:
        pass
    rand = random.randint(int(length/3), int(4*length/5))
    board = g.board()
    for move in g.mainline_moves():
        if rand == 0:
            break
        board.push(move)
        rand -= 1
    f = board.fen()
    info = stock.analyse(board, engine.Limit(depth=20), info=engine.INFO_SCORE)
    try:
        games["games"].append({"fen": f, "score": int(str(info["score"].relative))})
    except ValueError:
        pass
    

with open('games.json', 'w') as outfile:
    json.dump(games, outfile)
