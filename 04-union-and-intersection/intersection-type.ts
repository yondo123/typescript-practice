interface SaleGame {
    name: string;
    price: number;
    discount: number;
}

interface UsedGame {
    name: string;
    price: number;
    grade: string;
}

function displayGameInfo(game: SaleGame & UsedGame): void {
    const title = game.name || '';
    const price = game.price || 0;
    const additional = game.discount ? `할인가 : ${price - game.discount} 원` : `상태 : ${game.grade} 급`;

    console.log(`이름 :${title}\n가격: ${price}\n ${additional}`);
}

displayGameInfo({
    name: 'MARIO PARTY',
    price: 40000,
    grade: 'A',
    discount: 0 //error 개체 리터럴은 알려진 속성만 지정할 수 있으며 'UsedGame' 형식에 'discount'이(가) 없습니다
});
