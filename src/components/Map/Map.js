const Map = () => {
    const bookPrices = [2.5, 4.5, 3.5, 6.0, 8.0];

    //manual method
    let salePrices = [];

    for (let i = 0; i < bookPrices.length; i++) {
        let sale = bookPrices[i] * 0.5;
        salePrices.push(sale);
    }

    // Map method
    const mapSalePrices = bookPrices.map((price) => {
        return price * 0.5;
    });

    return (
        <div>
            <p>Manual Method output: {salePrices}</p>
            <p>Map Method output: {mapSalePrices}</p>
        </div>
    );
};

export default Map;