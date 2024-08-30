import Image from "next/image"


const Hero = () => {
    return (
        <div className='hero grid lg:grid-cols-3 md:grid-cols-3 grid-col-1 lg:gap-3  justify-items-center p-6 '>
            <a href="/">
                
                <div className="">
                    <Image src="/resturant-img.jpg" alt="" width={400} height={350} objectFit="cover"/>
                </div>
                <h1 className="text-3xl font-bold">Celebrate with family</h1>
                <h5 className="underline ">Book resturant for an event</h5> 
            </a>
            <a href="/">
                <div>
                    <Image src="/chef-img.jpg" alt="" width={400} height={250} objectFit="cover" />
                </div>
                <h1 className="text-3xl font-bold">Your Resturant, delivered</h1>
                <h5 className="underline">Add Your resturant</h5>  
            </a>
            <a href="/">
                <div>
                    <Image src="/ride.jpg" alt="" width={400} height={250} />
                </div>
                <h1 className="text-3xl font-bold">Deliver with Foodie.</h1>
                <h5 className="underline">Sign up to deliver</h5>
             </a>
        </div>
    )
}

export default Hero
