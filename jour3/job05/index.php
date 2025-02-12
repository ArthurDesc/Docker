<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            gap: 5px;
            margin: 20px auto;
            width: 310px;
        }
        .cell {
            width: 100px;
            height: 100px;
            border: 2px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="board" id="board">
        <?php for($i = 0; $i < 9; $i++): ?>
            <div class="cell" data-index="<?php echo $i; ?>"></div>
        <?php endfor; ?>
    </div>

    <script>
        let currentPlayer = 'X';
        const cells = document.querySelectorAll('.cell');
        
        cells.forEach(cell => {
            cell.addEventListener('click', handleClick);
        });

        function handleClick(e) {
            const cell = e.target;
            if (cell.textContent === '') {
                cell.textContent = currentPlayer;
                if (checkWin()) {
                    saveGame(currentPlayer);
                    alert(currentPlayer + ' a gagné!');
                    resetBoard();
                } else if ([...cells].every(cell => cell.textContent !== '')) {
                    saveGame('tie');
                    alert('Match nul!');
                    resetBoard();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        }

        function checkWin() {
            const winPatterns = [
                [0,1,2], [3,4,5], [6,7,8], // horizontales
                [0,3,6], [1,4,7], [2,5,8], // verticales
                [0,4,8], [2,4,6] // diagonales
            ];

            return winPatterns.some(pattern => {
                const [a, b, c] = pattern;
                return cells[a].textContent &&
                    cells[a].textContent === cells[b].textContent &&
                    cells[a].textContent === cells[c].textContent;
            });
        }

        function saveGame(result) {
            fetch('save.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    winner: result,
                    date: new Date().toISOString()
                })
            });
        }

        function resetBoard() {
            cells.forEach(cell => cell.textContent = '');
            currentPlayer = 'X';
        }
    </script>
</body>
</html> 