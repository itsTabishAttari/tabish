

const Cards = () => {
  return (
    <div className="grid grid-cols-3 lg:gap-3 justify-items-center">
       {/* first card  */}
       <div className="py-10">
        <div className="rounded overflow-hidden shadow-lg max-w-sm ">
           <img src="/book-resturant.jpg" alt="first" className="w-full" />
        </div>
        </div> 

          {/* first card  */}
          <div className="py-10">
              <div className="rounded overflow-hidden shadow-lg max-w-sm ">
                  <img src="/register-resturant.jpg" alt="first" className="w-full" />
                  <div className="px-6 py-4">
                    <div>Enjoy Birthday / Marriage</div>
                    <p>Book Resturant</p>
                  </div>
              </div>
          </div> 
          {/* first card  */}
          <div className="py-10">
              <div className="rounded overflow-hidden shadow-lg max-w-sm ">
                  <img src="/rider.jpg" alt="first" className="w-full" />
              </div>
          </div> 
    </div>
  )
}

export default Cards