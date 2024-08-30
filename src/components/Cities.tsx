import Image from "next/image"

const Cities = () => {
  return (
      <div className="p-8 bg-gray-100">
          <h1 className="text-center font-bold text-3xl">Discover us in these cities and many more.</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[950px] w-full gap-5 overflow-hidden ">
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/lahore.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                      <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Lahore</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/islambad.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                      <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Islambad</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/karachi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Karachi</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/multan.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Multan</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/faislabad.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Faislabad</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/bhavalpur.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Bhavalpur</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/rawalpindi.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Rawalpindi</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/ryk.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Rahim Yar khan</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/gujrawala.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Gujrawala</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/abotabad.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Abotabad</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/jhelum.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Jhelum</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/muree.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Muree</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/sahiwal.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Sahiwal</button>
              </div>
              <div className="relative overflow-hidden rounded-xl">
                  <div
                      className="cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      style={{ backgroundImage: "url('/sailkot.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}
                  >
                  </div>
                  <button className="absolute bottom-6 left-6 bg-white p-3 rounded-lg font-bold">Sailkot</button>
              </div>
          </div>
      </div>

  )
}

export default Cities