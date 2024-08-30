import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFaceLaughBeam } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image"

const MobileApp = () => {
  return (
    <div className="h-96 flex items-center w-full">
        <div className="w-[90%]  rounded-r-md bg-[#FFDDCC] h-full ">
              <div className="main flex  ml-[5%] h-full">
                <div className="flex flex-col justify-center gap-3">
                      <h2 className="text-red-600 text-lg tracking-widest">DOWNLOAD APP</h2>
                      <div>
                      <h1 className="font-extrabold text- text-3xl">Get Started With</h1>
                      <h1 className="font-extrabold text- text-3xl">Fudo Today!</h1>
                      </div>
                      <div>
                      <p className="font-semibold">Discover Food whereever and whenever and get</p>
                      <p className=" font-semibold">your food delivered quickly</p>
                      </div>
                      <div>
                      <button className="px-4 py-2 bg-red-500 text-white rounded-full">Get App</button>
                      </div>
                </div>
                <div className="w-[20%] flex flex-col items-center">
                    <div className="dot bg-red-600 rounded-full w-2 h-2 "></div>
                    <div className="emojie"> 
                          <Image src="/mobileApp/image 5.png" alt="" width={20} height={20}/>
                    </div>
                    <div className="foodArrive">
                          <Image src="/mobileApp/Frame 27.png" alt="" width={118} height={155}/>
                    </div>
                    <div className="fire">
                          <Image src="/mobileApp/noto_fire.png" alt="" width={20} height={20} />
                    </div>
                    <div>
                          <div className="dot bg-yellow-600 rounded-full w-[6px] h-[6px] "></div>
                    </div>
                    <div>
                        <div>
                            <div className="image">

                            </div>
                            <h1>Rischard Waston</h1>
                        </div>
                    </div>
                </div>
                <div>
                     <div><img src="/mobileApp/application.png" alt="" width={200} height={400} />  </div>
                </div>
                <div>
                    <div className="emojie">e</div>
                    <div>dot</div>
                </div>
             </div>
        </div>
        <div className="w-[10%]">
              <div className="relative top-[40%] flex flex-col items-center  ">
                  <Image src="/mobileApp/gg_shape-zigzag.png" alt="" width={20} height={20} />
                  <Image src="/mobileApp/gg_shape-zigzag.png" alt="" width={20} height={20} />
                </div> 
        </div>

    </div>
  )
}

export default MobileApp