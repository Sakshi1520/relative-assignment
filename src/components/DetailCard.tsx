import { dataItem } from "../data";

interface props {
    item: dataItem
}

const DetailCard = ({item}: props) => {
    return (
        <div className="flex flex-col w-72" key={item.name}>
            <div className="border w-max m-auto z-10 rounded-full">
                <div className="mx-auto coin__logo p-6 w-max rounded-full">
                    <div className="relative coin__img w-12 h-12" >
                        <img className="w-full h-full" src={"assets/images/"+item.shortForm+".svg"} alt={item.name} />
                    </div>
                </div>
            </div>
            <div className="coin__card px-5 pt-16 pb-3 w-full">
                <h2 className="coin__name text-xs py-2">{item.name} ({item.shortForm})</h2>
                <div className="coin__info-container bg-primary-color rounded-full relative py-2">
                    <div>${item.price}</div>
                    <div className={`coin__percent absolute text-xs ${item.percentPriceChange > 0 ? 'text-green-color' :'text-red-color' }`}>
                        {(item.percentPriceChange > 0 ? '+': '') + item.percentPriceChange}%
                        </div>
                </div>
                <p className="text-tertiary-color text-xs leading-8">Price</p>
                <div className="bg-primary-color rounded-full py-2">${item.tvl}</div>
                <p className="text-tertiary-color text-xs leading-8">TVL</p>
                <div className="flex bg-primary-color rounded-full py-2 px-4 gap-3 w-max mx-auto">
                    {item.pairs.map((coin: string, index: number) => (
                        <div className="w-6 h-6" key={index}>
                            <img className="w-full h-full" src={"assets/images/"+coin+".svg"} alt={coin} />
                        </div>
                    ))}
                </div>
                <p className="text-tertiary-color text-xs leading-8">Popular Pairs</p>
            </div>
        </div>
    )
}

export default DetailCard;