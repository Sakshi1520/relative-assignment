export interface dataItem {
    name: string,
    shortForm: string,
    price: number,
    tvl: number,
    pairs: string[],
    percentPriceChange: number
}

export const coinsData: dataItem[] = [
    {
        name: 'Bitcoin',
        shortForm: 'BTC',
        price: 31812.80,
        tvl: 60000,
        percentPriceChange: +10,
        pairs: ['SOL', 'ETH', 'BTC']
    },
    {
        name: 'Solana',
        shortForm: 'SOL',
        price: 32.83,
        tvl: 60000,
        percentPriceChange: -12.32,
        pairs: ['BTC', 'ETH', 'BUSD']
    },
    {
        name: 'Ethereum',
        shortForm: 'ETH',
        price: 1466.45,
        tvl: 60000,
        percentPriceChange: -11.93,
        pairs: ['SOL', 'BTC', 'BUSD']
    },
    {
        name: 'Binance USD',
        shortForm: 'BUSD',
        price: 1.00,
        tvl: 60000,
        percentPriceChange: 0.26,
        pairs: ['SOL', 'BTC', 'BUSD']
    },
    {
        name: 'Shiba Inu',
        shortForm: 'SHIB',
        price: 0.00000001948,
        tvl: 60000,
        percentPriceChange: -8.1,
        pairs: ['SOL', 'ETH', 'BUSD']
    },
]