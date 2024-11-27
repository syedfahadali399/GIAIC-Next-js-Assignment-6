import { Roboto } from "next/font/google"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['700']
})

let LandingPage = () => {
    return(
        <section className={robotoFont.className}>
            
            <div className="w-screen h-full bg-[#FFFFFF] flex flex-row justify-between items-center max-mt:items-start max-mt:h-full max-lm:h-[1165px] max-mm:h-[1085px] max-mt:flex-col max-mt:gap-[50px] max-sm:h-[1000px]">

                <div className="w-[640px] max-mt:w-full h-[300px] max-slg:h-[320px] max-mt:h-[325px] flex flex-col gap-[24px] max-mt:gap-[38px] max-mt:mt-[35px] ml-[64px] max-ult:ml-[24px] max-mt:ml-[0px] max-ust:w-[400px] max-ust:h-[375px] max-lt:justify-center max-mm:h-[350px] max-mm:w-[325px] max-sm:w-[300px] max-ust:ml-[0px] max-ust:mt-[42px] max-ust:p-[24px] max-ust:items-center animation-leftlandingpage">
                    <div className="w-[525px] max-mt:ml-[24px] h-[225px] max-slg:h-[250px] max-lt:h-[200px] max-mt:h-[120px] flex flex-col gap-[44px] max-lt:gap-[18px] max-mt:gap-[28px] max-ust:gap-[44px] max-ust:w-[375px] max-mm:w-[325px] max-ust:h-[375px] max-sm:w-[300px]">
                        <p className="w-[525px] h-[134px] max-lt:h-[125px] max-slg:h-[150px] text-[56px] text-[#000000] max-ust:w-[375px] max-mm:w-[325px] max-sm:w-[300px] max-ust:h-[110px] max-lt:text-[36px] max-mt:text-[34px] max-mt:h-[48px] max-ust:text-[40px] max-mm:text-[36px]">Learn new skills online with ease</p>
                        <p className="w-[525px] h-[54px] text-[18px] text-[#000000] max-ust:w-[375px] max-mm:w-[325px] max-sm:w-[300px] max-lt:text-[16px] max-ust:h-[80px]">Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
                    </div>
                    <div className="w-full max-mt:w-[480px] h-[64px] max-mt:ml-[24px] max-lt:h-[50px] flex gap-[64px] top-[16px] max-ust:w-[375px] max-mm:w-[325px] max-sm:w-[300px] max-ust:h-[50px]">
                        <button className="w-[178px] max-mt:w-[125px] max-mt:text-[12px] h-[48px] border-[#000000] border bg-[#000000] text-white rounded-[5px] gap-[8px] max-ust:text-[16px] max-mm:text-[14px] max-sm:text-[12px] max-ust:w-[200px] max-mm:w-[150px]">Start Learning Now</button>
                        <button className="w-[164px] max-mt:w-[125px] max-mt:text-[12px] h-[48px] border-[#000000] border text-[#000000] rounded-[5px] gap-[8px] max-ust:text-[16px] max-mm:text-[14px] max-sm:text-[12px] max-ust:w-[200px] max-mm:w-[150px]">Explore Courses</button>
                    </div>
                </div>

                <div className="w-[640px] h-full max-mt:w-full max-mt:h-full max-mt:hidden animation-popuplandingpage">
                    <img src="/landingPageImg/img.jpeg" alt="image"/>
                </div>
                <div className="w-[640px] h-full max-mt:w-full max-mt:h-full hidden max-mt:block animation-popup">
                    <img src="/landingPageImg/img.jpeg" alt="image"/>
                </div>

            </div>
        </section>
    )
}

export default LandingPage