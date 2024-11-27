import { Roboto } from "next/font/google"
import '../animation.css'

const robotoFont = Roboto({ subsets: ['latin'],
    weight: '400'
})

interface items {
    image: string,
    smallHeading: string,
    rating: number
    mainHeading: string,
    paragraph: string,
    price: number
}

let productData:items[] = [
    {
        image: '/courseimages/courseimg1.jpeg',
        smallHeading: 'Design',
        rating: 4.8,
        mainHeading: 'UI/UX Design',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 400
    },
    {
        image: '/courseimages/courseimg2.jpeg',
        smallHeading: 'Programming',
        rating: 4.6,
        mainHeading: 'Introduction to Phyton',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 300
    },
    {
        image: '/courseimages/courseimg3.jpeg',
        smallHeading: 'Business',
        rating: 4.9,
        mainHeading: 'Data Analysis for Beginners',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 500
    },
    {
        image: '/courseimages/courseimg4.jpeg',
        smallHeading: 'Art',
        rating: 4.4,
        mainHeading: 'Art Specialization',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 250
    },
    {
        image: '/courseimages/courseimg5.jpeg',
        smallHeading: 'Law',
        rating: 4.7,
        mainHeading: 'Rule of Law',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 450
    },
    {
        image: '/courseimages/courseimg.jpeg',
        smallHeading: 'Tech',
        rating: 4.8,
        mainHeading: 'Introduction to webflow',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
        price: 400
    }
]

let CoursesImgSection = () => {
    return(
        <section className={robotoFont.className}>
            <div className="h-[1742px] bg-[#FFFFFF] flex gap-[48px] flex-col pt-[84px] max-slg:h-[2300px] max-mt:h-[2150px] max-st:h-[3950px] max-lm:h-[3925px] max-mm:h-[3800px] max-lm:items-center max-lm:p-[16px] mt-[24px] max-lm:pt-[48px]">

                <div className="w-full h-[135px] gap-[16px] flex justify-center text-center max-lm:h-[100px] max-mm:h-[93px] max-lm:w-[350px] max-mm:w-[280px]">
                  <div className="w-[768px] h-[135px] gap-[24px] flex flex-col justify-center max-lm:h-[100px] max-mm:h-[93px] max-lm:w-[350px] max-mm:w-[280px] animation-up">
                      <p className="text-[#000000] text-[56px] font-bold max-lm:text-[36px] max-mm:text-[32px]">Courses</p>
                      <p className="text-[#000000] text-[18px] font-normal">Your Ultimate Guide to learning</p>
                  </div>
                </div>

                <div className="flex justify-center text-center h-[40px] gap-[38px] max-lm:w-[400px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-down">
                    <button className="w-[87px] h-[40px] gap-[8px] text-[16px] text-[#000000] underline max-usm:text-[12px]">Popular</button>
                    <button className="w-[140px] h-[40px] gap-[8px] text-[16px] text-[#000000] underline max-usm:text-[12px]">Recommended</button>
                    <button className="w-[124px] h-[40px] gap-[8px] text-[16px] text-[#000000] underline max-usm:text-[12px]">Best  Price</button>
                </div>

                <div className="h-[3455px] max-mm:h-[3333px] gap-[64px] grid grid-cols-3 max-slg:grid-cols-2 justify-items-center p-[24px] max-st:flex max-st:flex-col max-st:p-[6px] max-st:items-center">
                    {productData.map((product, index) => (
                        <div key={index} className="rounded-[12px] w-[416px] max-slg:w-[325px] max-mt:w-[300px] max-st:w-[350px] h-[534px] max-mm:h-[500px] max-mt:h-[485px] max-st:h-[515px] max-lm:h-[534px] bg-[#F7F7F7] flex flex-col gap-[24px] max-xl:w-[375px] max-lg:w-[350px] max-mm:w-[350px] max-sm:w-[320px] max-usm:w-[300px] animation-popup max-slg:animation-right">
                            <img alt={product.mainHeading} width={416} height={300} src={product.image} className = 'object-cover rounded-[12px]'/>
                            <div className="w-[416px] max-slg:w-[325px] max-mt:w-[300px] max-st:w-[350px] h-[210px] gap-[24px] flex flex-col p-[4px] max-xl:w-[375px] max-lg:w-[350px] max-lg:h-[340px] max-mm:w-[350px] max-lm:h-[265px] max-sm:w-[320px] max-usm:w-[300px]">
                                <span className="flex text-[14px] font-semibold justify-between px-2">
                                  <h3>{product.smallHeading}</h3>
                                  <div className="flex gap-1 items-center">
                                      <img alt="star" width={24} height={24} src="/star.svg"/>
                                      <p>{product.rating}</p>
                                  </div>
                                </span>
                               <h1 className="text-[2xl] font-bold px-2">{product.mainHeading}</h1>
                               <p className="text-[16px] px-2">{product.paragraph}</p>
                               <div className="flex text-[16px] gap-4 item-center px-2 items-center">
                                  <button className="font-normal w-[117px] h-[40px] py-[8px] rounded-[5px] border border-solid border-black">Enroll Now</button>
                                  <h2 className="text-center font-semibold">{product.price}$</h2>
                                </div>
                            </div>
                        </div>
                    ) )}
                </div>
                <div className="flex justify-center m-[32px] animation-right">
                    <div className="w-[152px] h-[40px] flex justify-center border border-[#000000] items-center text-center animation-right">
                       <button className="w-[120px] h-[24px] tetx-[16px] text-[#000000] rounded-[5px]">View All Courses</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesImgSection