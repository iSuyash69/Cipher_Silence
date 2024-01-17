import ViewListing from "@components/listings/viewListing/ViewListing";

const Page=({params})=>{

    return(
        <div>
            <ViewListing title={params.viewListing}/>
        </div>
    );
}

export default Page;
