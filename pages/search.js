import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import Map from "../Components/Map";

function Search({serarchResults}) {
    const router = useRouter();

    

    // ES6 destructring
    const {location, startDate, endDate, noOfGuests} = router.query;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

    const range = `${formattedStartDate} - ${formattedEndDate}`;
    

    return (
        <div>
            <Header placeholder={`${location} |  ${range}  |  ${noOfGuests} guests`} />
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm">300+ Stays - {range} - for {noOfGuests} Guests</p>

                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800  whitespace-nowrap">
                        <p className="button">Cnacellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More Filters</p>    
                    </div>

                    <div className="flex flex-col">
                    {serarchResults.map(({ img, location, title, description, star, price, total }) => (
                        <InfoCard 
                        key ={img}
                            img ={img}
                            location ={location}
                            title={title}
                            description={description}
                            star={star}
                            price={price}
                            total={total}
                        />
                    ))}
                    </div>
                </section>

                <section className=" hidden xl:inline-flex xl:min-w-[600px]">
                    <Map serarchResults={serarchResults} />
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Search;

export async function getServerSideProps() {
    const serarchResults = await fetch("https://links.papareact.com/isz").then(res => res.json());

    return {
        props: {
            serarchResults,
        },
    };
}
