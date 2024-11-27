import { Roboto } from "next/font/google"
import '../animation.css'

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['700']
})

let AchievementSection = () => {
    return(
        // {/* Our Achievement Section */}
        <section className={robotoFont.className}>
        <div className="w-full h-[420px] max-ult:h-[475px] gap-[24px] flex flex-col mt-[100px] max-lm:h-[600px] max-lm:items-center max-lm:mt-[50px]">
            <div className="h-[200px] max-ust:h-full gap-[24px] flex justify-center max-lm:h-[275px] max-lm:w-[375px] max-mm:w-[325px] max-sm:w-[300px]">
                <div className="w-full h-[165px] max-ust:h-full max-lt:h-[180px] gap-[32px] max-lm:h-[275px] max-lm:w-[375px] max-mm:w-[325px] max-sm:w-[300px]">
                    <div className="w-full h-[150px] max-ust:h-full max-lt:h-[180px] gap-[24px] flex flex-col text-center max-lm:h-[275px] max-lm:w-[375px] max-mm:w-[325px] max-sm:w-[300px] max-lm:items-center animation-up">
                        <p className="font-bold text-[48px] text-[#000000] max-lm:text-[32px] max-lm:w-[375px] max-mm:w-[325px] max-sm:w-[300px]">Our Achivements</p>
                        <p className="font-normal text-[18px] text-[#000000] text-center max-lm:w-[375px] max-mm:w-[325px] max-sm:w-[300px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>         
                </div>
            </div>

            <div className="w-full h-[96px] gap-[24px] flex justify-center max-ult:flex-col max-ult:gap-[24px] max-ult:items-center max-ult:h-[190px] max-lm:h-[260px] max-lm:flex-col max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[325px]">

                <div className="w-[616px] h-[96px] gap-[24px] flex flex-row max-lm:h-[100px] max-lg:w-[550px] max-sml:w-[450px] max-slg:w-[500px] max-lm:flex-row max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[325px]">

                    <div className="flex flex-col items-center w-[296px] h-[80px] gap-[8px] max-lm:h-[95px] animation-popup">
                        <div className="w-[91px] h-[48px] max-lm:h-[60px]">
                            <p className="font-bold text-[40px] text-[#000000]">+200</p>
                        </div>
                        <div className="w-[60px] h-[24px] max-lm:h-[60px]">
                            <p className="font-normal text-[16px] text-[#000000]">Courses</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-[296px] h-[80px] gap-[8px] max-lm:h-[95px] animation-popup">
                        <div className="w-[72px] h-[48px] max-lm:h-[60px]">
                            <p className="font-bold text-[40px] text-[#000000]">50K</p>
                        </div>
                        <div className="w-[60px] h-[24px] max-lm:h-[60px]">
                            <p className="font-normal text-[16px] text-[#000000]">Mentors</p>
                        </div>
                    </div>

                </div>

                <div className="w-[616px] h-[96px] gap-[24px] flex flex-row max-lm:h-[100px] max-lg:w-[550px] max-sml:w-[450px] max-slg:w-[500px] max-lm:flex-row max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[325px]">

                    <div className="flex flex-col items-center w-[296px] h-[80px] gap-[8px] max-lm:h-[95px] animation-popup">
                       <div className="w-[91px] h-[48px] max-lm:h-[60px]">
                            <p className="font-bold text-[40px] text-[#000000]">370k</p>
                        </div>
                        <div className="w-[64px] h-[24px] max-lm:h-[60px]">
                            <p className="font-normal text-[16px] text-[#000000]">Students</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center w-[296px] h-[80px] gap-[8px] max-lm:h-[95px] animation-popup">
                        <div className="w-[91px] h-[48px] max-lm:h-[60px]">
                            <p className="font-bold text-[40px] text-[#000000]">100+</p>
                        </div>
                        <div className="w-[85px] h-[24px] max-lm:h-[60px]">
                            <p className="font-normal text-[16px] text-[#000000]">Recognition</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
    )
}

export default AchievementSection