import { Roboto } from "next/font/google";
import { Inter } from "next/font/google"
import "../animation.css"

const fontInter = Inter({ subsets: ['latin'],
    weight: ['700']
}) 

const inter = Roboto({ subsets: ['latin'],
    weight : ['400']
})

let Header = () => {
    return(
        <header className={inter.className}>
            <div className="w-full h-[54px] bg-[#F7F7F7] flex justify-around p-[12px] max-mt:hidden animation-upnavbar">
                <div className="w-[1080px] max-sml:w-full max-slg:w-[1050px] h-[54px] flex gap-[32px]">
                    <div className="flex flex-row gap-[16px] w-[386px] h-[30px] text-[14px] leading-[21px]">
                       <p className="w-[205px]">Phone Number: 956 742 455</p>
                       <p className="w-[30px]">|</p>
                       <p className="w-[149px]">Email:info@ddsgnr.com</p>
                    </div>
                    <div className="w-[736px] h-[24px] flex flex-row gap-[16px] justify-end">
                        <div className="w-[132px] h-[24px] gap-[12px] flex flex-row">
                            <img src="/logoicons/facebook.svg" alt="facebook" width={24} height={24}/>
                            <img src="/logoicons/instagram.svg" alt="instagram" width={18} height={18}/>
                            <img src="/logoicons/twitter.svg" alt="twitter" width={18} height={18}/>
                            <img src="/logoicons/linkedin.svg" alt="linkedin" width={18} height={18}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#F7F7F7] h-[72px] border-[#676767] flex flex-row justify-center max-lm:items-center max-mt:items-center max-lm:p-[16px] max-lm:pr-[20px] max-mm:p-[12px] animation-downnavbar">
                <div className="w-[1080px] max-sml:w-full max-ult:p-[6px] max-mt:p-[12px] max-slg:w-[1050px] h-[54px] max-mt:h-[63px] flex flex-row justify-between max-lm:items-center">
                    <div className="w-[141px] max-lt:w-[100px] h-[41px] flex gap-[10.5px] items-center">
                        <div className="w-[130px] max-lt:w-[100px] h-[30px] flex flex-row gap-[8px]">
                            <img src="/landingPageImg/logo.png" alt="image" width={25.76} height={26.6}/>
                            <div className="w-[90px] max-lt:w-[65px] h-[30px] text-[25px] max-lt:text-[18px] text-[#000000]">
                                <p className={fontInter.className}>Dasgnr</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden max-mt:block">
                        <img src="/threelines.svg" alt="threeline" width={40} height={40}/>
                    </div>
                    <div className="flex flex-row gap-[32px] w-[910px] max-sml:gap-[16px] max-lt:items-center max-lt:gap-[12px] max-sml:w-full h-[44px] bg-[#FFFFFF] max-mt:hidden">
                        <div className="flex flex-row gap-[32px] max-sml:gap-[16px] max-lt:gap-[12px] w-[687px] max-sml:w-full h-[44px]">

                            <div className="w-[64px] max-sml:w-[50px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[59px] max-sml:w-[40px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">Home</p>
                            </div>
                            <div className="w-[76px] max-sml:w-[70px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[59px] max-sml:w-[52px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">Courses</p>
                            </div>
                            <div className="w-[81px] max-sml:w-[74px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[59px] max-sml:w-[54px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">Services</p>
                            </div>
                            <div className="w-[113px] max-sml:w-[100px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[80px] max-sml:w-[80px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">Achievement</p>
                            </div>
                            <div className="w-[83px] max-sml:w-[75px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[67px] max-sml:w-[62px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">About Us</p>
                            </div>
                            <div className="w-[104px] max-sml:w-[90px] h-[44px] max-lt:h-[36px] gap-[10px] p-[10px]">
                                <p className="w-[75px] max-sml:w-[75px] h-[24px] text-[16px] max-sml:text-[14px] max-lt:text-[12px]">Testimonial</p>
                            </div>
                        </div>
                        <div className="flex flex-row w-[151px] max-sml:w-full max-sml:justify-center max-lt:items-center h-[40px] gap-[16px]">
                            <button className="border-[#000000] border w-[80px] h-[40px] rounded-[5px] text-black max-lt:w-[60px] max-lt:h-[30px] max-lt:text-[14px]">Login</button>
                            <button className="border-[#000000] border w-[80px] h-[40px] rounded-[5px] text-white bg-[#000000] max-lt:w-[60px] max-lt:h-[30px] max-lt:text-[14px]">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header