import { Roboto } from "next/font/google"
import "../animation.css"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['700']
})

let CoursesStickerSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="w-full h-[1100px] gap-[80px] bg-[#FFFFFF] flex flex-col items-center max-st:h-[1775px] max-lm:h-[2275px] max-lm:gap-[48px]">

                <div className="w-[768px] max-lt:w-full h-[208px] max-lt:h-[230px] gap-[357px] flex flex-col pt-[98px] max-lm:h-[325px] max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[320px]">
                    <div className="w-[768px] max-lt:w-full h-[108px] max-lt:h-[130px] gap-[24px] flex flex-col text-center max-lm:h-[225px] max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-lm:items-center animation-up">
                      <p className="w-[768px] max-lt:w-full h-[58px] text-[48px] text-[#000000] max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-ust:text-[32px] max-mm:text-[32px] max-lm:h-[100px] max-lt:text-[36px]">Explore Courses By Category</p>
                      <p className="w-[768px] max-lt:w-full h-[27px] text-[18px] text-[#000000] font-normal max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-lm:h-[100px] max-mt:h-[50px] max-mm:text-[16px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-slg:grid-cols-2 gap-16 max-lm:gap-16 max-st:flex max-st:flex-col max-mt:gap-4 bg-[#FFFFFF] max-lm:flex max-lm:flex-col max-lm:h-[1750px] max-lm:w-[375px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">

                    <div className=" grid h-[636px] gap-[64px] max-lm:h-[525px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-sm:w-[320px] max-usm:w-[300px]">

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-left">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker1.svg" alt="sticker1img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px] max-mt:text-[14px] max-sm:text-[16px]">Design & Development</p>
                                    <p className="text-[18px] font-normal max-mt:text-[14px] text-[#000000]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-left">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker2.svg" alt="sticker2img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Marketing</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>
 
                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-left">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker3.svg" alt="sticker3img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Development</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid h-[636px] gap-[64px] max-lm:h-[525px] max-lm:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                        <div className="h-[132px] flex gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-right">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker4.svg" alt="sticker4img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Communication</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-right">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker5.svg" alt="sticker5img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Digital Marketing</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-mm:w-[350px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-sml:animation-right">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker6.svg" alt="sticker6img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Self Development</p>
                                    <p className="tetx-[18px] font-normal text-[#757171] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="grid max-slg:hidden max-lm:grid h-[636px] gap-[64px] max-lm:h-[525px] max-lm:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                        <div className="h-[132px] flex gap-[64px] max-lm:w-[375px] max-lg:w-[325px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup"> 
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker7.svg" alt="sticker7img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Business</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker8.svg" alt="sticker8img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Finance</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[132px] gap-[64px] max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup">
                            <div className="w-[410px] h-[132px] rounded-[5px] p-[16px] gap-[32px] bg-[#F7F7F7] flex items-center flex-row max-xl:w-[375px] max-lg:w-[325px] max-mt:w-[300px] max-st:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px]">
                                <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] bg-[#FFFFFF]">
                                    <img src="/stickerlogo/sticker9.svg" alt="sticker9img"/>
                                </div>
                                <div className="w-[246px] h-[67px] gap-[16px] flex flex-col max-lm:h-[67px]">
                                    <p className="text-[20px] font-semibold text-[#000000] max-lg:text-[16px]">Consulting</p>
                                    <p className="tetx-[18px] font-normal text-[#000000] max-lg:text-[14px]">50+ Courses Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[180px] h-[48px] flex justify-center gap-[8px] animation-left">
                    <button className="w-[140px] h-[24xp] font-normal text-[16px] text-[#000000] rounded-[5px] border border-[#000000]">View All Courses</button>
                </div>
            </div>
        </section>
    )
}

export default CoursesStickerSection