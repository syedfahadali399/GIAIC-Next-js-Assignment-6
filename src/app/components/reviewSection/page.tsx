import { Roboto } from "next/font/google";
import '../animation.css'

const fontRoboto = Roboto({ subsets: ['latin'],
    weight: ['400']
})

let ReviewSection = () => {
    return(
        <section className={fontRoboto.className}>
            <div className="h-[830px] gap-[75px] bg-[#F7F7F7] flex flex-col max-lg:h-[775px] max-ult:h-[1475px] max-ult:gap-[48px] max-ult:pt-[0px] max-lm:h-[1500px] max-mm:h-[1675px] max-lm:items-center max-lm:gap-[50px]">

                <div className="flex justify-center pt-[64px] max-ust:h-[220px]">
                    <div className="w-[560px] h-[109px] gap-[24px] text-center flex flex-col max-ust:w-[400px] max-mm:w-[300px] max-ust:h-[150px] max-ust:text-center max-ust:items-center animation-up">
                      <h1 className="w-[560px] h-[58px] font-bold text-[48px] max-ust:w-[400px] max-mm:w-[280px] max-ust:h-[55px] max-ust:text-[32px] max-mm:text-[27px]">Customer testimonials</h1>
                      <p className="w-[560px] h-[27px] text-[18px] max-ust:w-[400px] max-mm:w-[280px] max-ust:h-[60px] max-ust:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>

                <div className="h-[640px] gap-[48px] flex flex-col max-ult:h-[1050px] max-lm:h-[1040px] max-mm:h-[1175px]">
                    <div className="gap-[32px] flex flex-row max-ult:flex-col max-ult:w-full max-ult:gap-[32px] max-ult:items-center justify-around max-lm:flex-col">

                        {/* Review 1*/}
                        <div className="w-[350px] h-[321px] border border-[#000000] p-[32px] gap-[24px] flex flex-col max-slg:w-[300px] max-slg:h-[325px] max-mm:w-[280px] max-lm:p-[18px] max-mm:h-[360px] animation-left">
                            <div className="w-[116px] h-[18px] gap-[4px] flex flex-row">
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                            </div>
                            <div className="w-[298px] h-[215px] gap-[24px] flex flex-col max-slg:w-[250px] max-mm:w-[225px] max-lm:h-[300px] max-mm:h-[280px]">
                                <p className="w-[298px] h-[135px] text-[18px] text-[#000000] max-slg:w-[250px] max-mm:w-[225px] max-mm:h-[180px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                <div className="w-[235px] h-[56px] gap-[20px] flex flex-row max-mm:items-center">
                                    <img className="rounded-[50%]" src="/ourTeamImages/imgone.png" alt="clientimg1" width={56} height={56}/>
                                    <div className="w-[139px] h-[48px] flex flex-col max-lm:w-[150px] ">
                                        <p className="w-[99px] h-[24px] font-semibold text-[16px] text-[#000000]">James Nduku</p>
                                        <p className="w-[139px] h-[24px] text-[14px] text-[#000000] max-slg:w-[150px] max-lm:w-[150px] max-lm:text-[15px] max-sm:text-[13px]">Marketing Coordinator</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review 2*/}
                        <div className="w-[350px] h-[321px] border border-[#000000] p-[32px] gap-[24px] flex flex-col max-slg:w-[300px] max-slg:h-[325px] max-mm:w-[280px] max-lm:p-[18px] max-mm:h-[360px] animation-popup">
                            <div className="w-[116px] h-[18px] gap-[4px] flex flex-row">
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                            </div>
                            <div className="w-[298px] h-[215px] gap-[24px] flex flex-col max-slg:w-[250px] max-mm:w-[225px] max-mm:h-[280px]">
                                <p className="w-[298px] h-[135px] text-[18px] text-[#000000] max-slg:w-[250px] max-mm:w-[225px] max-mm:h-[180px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                <div className="w-[215px] h-[56px] gap-[20px] flex flex-row max-mm:items-center">
                                    <img className="rounded-[50%]" src="/ourTeamImages/imgthree.png" alt="clientimg1" width={56} height={56}/>
                                    <div className="w-[139px] h-[48px] flex flex-col">
                                        <p className="w-[139px] h-[24px] font-semibold text-[16px] text-[#000000]">Joseph Ngumbau</p>
                                        <p className="w-[139px] h-[24px] text-[16px] text-[#000000]">Medical Assistant</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review 3*/}
                        <div className="w-[350px] h-[321px] border border-[#000000] p-[32px] gap-[24px] flex flex-col max-slg:w-[300px] max-slg:h-[325px] max-mm:w-[280px] max-mm:p-[18px] max-mm:h-[380px] animation-right">
                            <div className="w-[116px] h-[18px] gap-[4px] flex flex-row">
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                              <img src="/star.svg" alt="star" width={20} height={20}/>
                            </div>
                            <div className="w-[298px] h-[215px] gap-[24px] flex flex-col max-slg:w-[250px] max-mm:w-[225px] max-mm:h-[280px]">
                                <p className="w-[298px] h-[135px] text-[18px] text-[#000000] max-slg:w-[250px] max-mm:w-[225px] max-mm:h-[180px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
                                <div className="w-[215px] h-[56px] gap-[20px] flex flex-row max-mm:items-center">
                                    <img className="rounded-[50%]" src="/ourTeamImages/imgsix.png" alt="clientimg1" width={56} height={56}/>
                                    <div className="w-[139px] h-[48px] flex flex-col">
                                        <p className="w-[99px] h-[24px] font-semibold text-[16px] text-[#000000]">John Leboo</p>
                                        <p className="w-[139px] h-[24px] text-[16px] text-[#000000]">Cat Trainer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>       
                </div>

                <div className="h-[48px] flex justify-between p-[64px] max-lg:p-[38px] items-center max-lm:h-[120px] max-lm:p-[14px] max-lm:w-[400px] max-mm:w-[280px] max-lm:py-[16px]">
                    {/* Circle Image*/}
                    <div className="w-[72px] h-[8px] gap-[8px] flex flex-row animation-left">
                        <img src="/circle.svg" alt="circle" width={72} height={72}/> 
                        <img src="/circle.svg" alt="circle" width={72} height={72}/> 
                        <img src="/circle.svg" alt="circle" width={72} height={72}/> 
                        <img src="/circle.svg" alt="circle" width={72} height={72}/> 
                        <img src="/circle.svg" alt="circle" width={72} height={72}/> 
                    </div>
                    {/* Click Button */}
                    <div className="w-[111px] h-[48px] gap-[15px] flex flex-row items-center animation-right">
                        <div className="w-[48px] h-[48px] p-[12px] gap-[8px] flex border border-[#000000] rounded-[50%]">
                            <button><img src="/arrow/leftarrow.svg" alt="leftbutton" width={24} height={24}/></button>
                        </div>
                        <div className="w-[48px] h-[48px] p-[12px] gap-[8px] flex border border-[#000000] rounded-[50%]">
                            <button><img src="/arrow/rightarrow.svg" alt="righttbutton" width={18} height={18}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection