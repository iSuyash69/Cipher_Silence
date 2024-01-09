import { useRouter } from "next/navigation";

const ListingCard=({card})=>{

    const router=useRouter();

    const viewListingClickHandler=()=>{
        router.push(`/${card.title}`);
    };

    return(
        <div onClick={viewListingClickHandler} className="flex cursor-pointer flex-col">
            <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gray-100">
                <img className="w-full h-full object-cover hover:transform hover:scale-125 transition-transform duration-300" src={card.image.url} alt={card.image.filename}/>
            </div>
            <div className="flex flex-col pt-2 w-full">
                <div className="flex justify-between">
                    <h1 className="font-semibold">{card.title}</h1>
                    <h3 className="pr-4">Rs.{card.price}</h3>
                </div>
                <h2 className="text-gray-600 text-sm">{card.location}, {card.country}</h2>
            </div>
        </div>
    );
}

export default ListingCard;