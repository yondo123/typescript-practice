interface Game {
    name: string;
    price: number;
}

interface SaleGame extends Game {
    discount: number;
}

interface UsedGame extends Game {
    prodGrade: string;
}

//extends
const marioparty: SaleGame = {
    name: 'marioparty',
    price: 74200,
    discount: 4000
};

const fifa16: UsedGame = {
    name: 'FIFA16',
    price: 5000,
    prodGrade: 'A'
};
