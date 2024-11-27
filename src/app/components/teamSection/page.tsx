import { Roboto } from "next/font/google";
import '../animation.css'

const fontRoboto = Roboto({ subsets: ['latin'],
    weight: ['400']
})

interface datas {
    image: string,
    nickName: string,
    work: string,
}

let allData:datas[] = [

    {
        image: '/ourTeamImages/imgone.png',
        nickName: 'James Nduku',
        work: 'Marketing Coordinator'
    },
    {
        image: '/ourTeamImages/imgtwo.png',
        nickName: 'Joseph Munyambu',
        work: 'Nursing Assistant'
    },
    {
        image: '/ourTeamImages/imgthree.png',
        nickName: 'Joseph Ngumbau',
        work: 'Medical Assistant'
    },
    {
        image: '/ourTeamImages/imgfour.png',
        nickName: 'Erick Kipkemboi',
        work: 'Web Designer'
    },
    {
        image: '/ourTeamImages/imgfive.png',
        nickName: 'Stephen Kerubo',
        work: 'President of Sales'
    },
    {
        image: '/ourTeamImages/imgsix.png',
        nickName: 'John Leboo',
        work: 'Cat Trainer'
    },
]

let TeamSection = () => {
    return(
        <section className={fontRoboto.className}>
            <div className="h-[895px] max-ult:h-[1100px] gap-[80px] pt-[64px] bg-[#F7F7F7] flex flex-col max-ust:h-[1725px] max-ust:items-center">

                <div className="h-[125px] gap-[16px] flex justify-center max-lm:h-[125px] max-lm:w-[400px] max-mm:w-[320px]">
                    <div className="h-[125px] gap-[24px] flex flex-col text-center max-lm:h-[125px] animation-up">
                        <h1 className="font-bold text-[48px] text-[#000000] max-lm:text-[32px]">Our team</h1>
                        <p className="font-normal text-[18px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 max-ult:grid-cols-2 max-ult:h-[1000px] justify-items-center gap-[96px] max-mt:gap-[66px] max-st:gap-[32px] h-[515px] text-center max-ust:h-[1735px] max-ust:flex max-ust:flex-col max-ust:w-[400px] max-mm:w-[350px] max-usm:w-[320px] max-ust:items-center">
                    {allData.map((data, index) => (
                        <div className="w-[265px] gap-[64px] flex flex-col justify-center max-ust:w-[400px] max-mm:w-[350px] max-usm:w-[320px] max-ust:items-center max-ult:animation-left animation-popup">
                           <div key={index} className="h-[209px] max-ust:w-[350px] max-mm:w-[350px] max-usm:w-[320px] max-ust:justify-items-center">
                                <div className="w-[265px] h-[209px] gap-[24px] flex flex-col items-center max-ust:w-[350px] max-mm:w-[350px] max-usm:w-[320px]">
                                   <img src={data.image} alt="image1" width={80} height={80} className="object-cover"/>
                                   <div className="w-[265px] h-[209px] max-ust:w-[350px] max-mm:w-[350px] max-usm:w-[320px] max-ust:justify-items-center">
                                        <h1 className="w-[265px] h-[30px] font-semibold text-[20px] text-[#000000] max-ust:w-[400px] max-mm:w-[350px] max-usm:w-[320px]">{data.nickName}</h1>
                                        <h1 className="w-[265px] h-[27px] font-normal text-[18px] text-[#000000] max-ust:w-[400px] max-mm:w-[350px] max-usm:w-[320px]">{data.work}</h1>
                                   </div>
                                   <div className="w-[100px] h-[24px] gap-[14px] flex flex-row justify-center">
                                      <img src="/logoicons/linkedin.svg" alt="linkedlogo" width={18} height={18}/>
                                      <img src="/logoicons/twitter.svg" alt="twitterlogo" width={18} height={18}/>
                                      <img src="/logoicons/ball.svg" alt="balllogo" width={18} height={18}/>
                                   </div>
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection