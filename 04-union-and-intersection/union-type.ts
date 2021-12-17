interface SaleGame {
    type: 'sale';
    name: string;
    price: number;
    discount: number;
}

interface UsedGame {
    type: 'used';
    name: string;
    price: number;
    grade: string;
}

type GameType = SaleGame | UsedGame;

function displayGameInfo(game: GameType): void {
    const title = game.name || '';
    const price = game.price || 0;
    let message = `이름 :${title}\n가격: ${price}`;
    switch (game.type) {
        case 'sale':
            message += `할인가 : ${price - game.discount} 원`;
            break;
        case 'used':
            message += `상태 : ${game.grade} 급`;
            break;
    }
    console.log(message);
}

const marioparty: UsedGame = {
    type: 'used',
    name: 'MARIO PARTY',
    price: 40000,
    grade: 'A'
};
displayGameInfo(marioparty);
