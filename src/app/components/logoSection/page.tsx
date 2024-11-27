import { Roboto } from "next/font/google"

const robotoFont = Roboto({ subsets: ['latin'],
    weight: ['700']
})

let LogoSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="w-full h-[228px] max-ult:h-[250px] max-lt:h-[325px] max-sml:p-[30px] max-lt:mt-[48px] max-lm:mt-[0px] flex flex-row gap-[64px] justify-between pt-[64px] pb-[64px] bg-[#F7F7F7] items-center max-st:flex-col max-st:h-[600px] max-st:gap-[32px] max-st:text-center">
                <div className="w-[320px] h-[68px] ml-[48px] max-slg:ml-[0px] max-st:ml-[0px] max-st:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-mt:h-[120px] max-lm:h-[80px] max-lm:content-center animation-up">
                    <p className="text-[24px] text-[#000000] max-mm:text-[20px]">Trusted by 2000+ companies worldwide.</p>
                </div>
                <div className="w-[880px] max-ult:grid max-ult:grid-cols-3 max-lt:grid-cols-2 max-ult:w-[550px] max-lt:w-[450px] max-ult:h-[150px] max-lt:h-[220px] h-[56px] flex flex-row gap-[19px] max-st:flex-col max-st:h-[455px] max-st:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-st:items-center max-st:justify-center max-st:justify-items-center">
                    <img className="w-[124px] h-[60px] animation-popup" src="/companylogo/logoone.png" alt="image1"/>
                    <img className="w-[124px] h-[60px] animation-popup" src="/companylogo/logotwo.png" alt="image2"/>
                    <img className="w-[124px] h-[60px] animation-popup" src="/companylogo/logothree.png" alt="image3"/>
                    <img className="w-[124px] max-sml:hidden max-ult:block h-[60px] animation-popup" src="/companylogo/logofour.png" alt="image4"/>
                    <img className="w-[124px] h-[60px] animation-popup" src="/companylogo/logofive.png" alt="image5"/>
                    <img className="w-[124px] h-[60px] animation-popup" src="/companylogo/logosix.png" alt="image6"/>
                </div>
            </div>
        </section>
    )
}

export default LogoSection