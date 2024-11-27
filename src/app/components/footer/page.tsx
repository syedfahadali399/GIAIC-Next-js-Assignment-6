import { Roboto } from "next/font/google"
import "../animation.css"

const fontRoboto = Roboto({ subsets: ['latin'],
    weight: ['400']
})

let Footer = () => {
    return(
        <footer className={fontRoboto.className}>
            <div className="h-[750px] gap-[80px] p-[42px] max-mt:h-[775px] max-mt:p-[24px] max-st:h-[1400px] max-lm:h-[1560px] max-mm:h-[1475px] max-st:gap-[48px] max-st:p-[20px] max-st:mt-[24px]">
                <div className="h-[650px] gap-[60px] flex flex-col max-mt:h-[710px] max-st:h-[1350px] max-lm:h-[1500px] max-mm:h-[1450px] max-mt:gap-[48px] max-lm:gap-[38px] max-st:items-center">

                    {/* Upper Footer */}
                    <div className="h-[82px] flex justify-between items-center max-mt:flex-col max-mt:h-[190px] max-lm:flex-col max-lm:text-center max-lm:w-[400px] max-mm:w-[320px] max-lm:h-[285px] max-lm:gap-[24px] max-lt:h-[100px]">

                        <div className="h-[51px] max-lm:w-[400px] max-mm:w-[300px] max-lm:h-[91px] max-lm:gap-[16px] max-lm:flex max-lm:flex-col max-lm:text-center max-lm:items-center max-lt:h-[80px] max-mt:text-center animation-left">
                            <h1 className="w-full h-[27px] font-semibold text-[18px] text-[#000000] max-lm:w-[280px]">Subscribe to our newsletter</h1>
                            <p className="w-full h-[24px] font-normal text-[16px] max-ult:text-[14px] text-[#000000] max-lm:w-[280px] max-lm:h-[45px] max-lt:h-[45px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className="w-[400px] h-[82px] gap-[16px] flex flex-col max-lm:w-[400px] max-mm:w-[300px] max-lm:h-[146px] max-lm:gap-[16px] max-lm:items-center max-lm:text-center max-mt:text-center animation-right">

                            <div className="w-[400px] h-[82px] gap-[16px] flex flex-row max-lm:flex-col items-center max-lm:w-[400px] max-mm:w-[300px] max-lm:h-[112px] max-lm:gap-[12px]">
                                <input className="w-[265px] h-[48px] border border-[#000000] gap-[8px] p-[12px] rounded-[5px] max-lm:w-[280px]" type="email" name="email" placeholder="Enter Your Email"/>
                                <button className="w-[119px] h-[48px] rounded-[5px] border gap-[8px] border-[#000000] max-lm:w-[280px]">Subscribe</button>
                            </div>

                            <p className="w-[400px] h-[18px] text-[12px] underline text-[#000000] max-lm:w-[280px]">By subscribing you agree to with our Privacy Policy</p>
                        </div>
                    </div>

                    {/* Middle Footer */}
                    <div className="h-full max-st:h-[850px] gap-[40px] max-sml:h-[225px] max-mt:gap-[12px] max-st:gap-[40px] flex justify-between max-st:flex-col max-st:text-center max-st:items-center">

                        <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] gap-[40px] flex max-lm:justify-center animation-popup">
                            <div className="w-[130px] h-[40px] gap-[15px]">
                                <div className="w-[130px] h max-lt:w-[145px]-[30px] gap-[8px] flex flex-row items-center">

                                    <div className="w-[32px] h-[30px]">
                                        <img src="/landingPageImg/logo.png" alt="logo"/>
                                    </div>   

                                    <h1 className="w-[90px] h-[30px] font-bold text-[25px] text-[#000000]">Ddsgnr</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[225px] gap-[16px] flex flex-col animation-popup">

                            <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[24px] text-[16px] font-semibold text-[#000000]">Courses</p>

                            <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[185px]">

                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Business</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Development</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Technology</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Design</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Programming</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[225px] gap-[16px] flex flex-col animation-popup">

                            <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[24px] text-[16px] font-semibold text-[#000000]">Resources</p>

                            <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[185px]">

                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Career</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Resume</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Learning</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Interview Preparation</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Jobs</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[225px] gap-[16px] flex flex-col animation-popup">

                            <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[24px] text-[16px] font-semibold text-[#000000]">About Us</p>

                            <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[185px]">
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Contact</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Help/Support</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">FAQ</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Terms and Conditions</p>
                                </div>
                                <div className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[37px]">
                                    <p className="w-[200px] max-ult:w-[175px] max-lt:w-[145px] h-[21px] font-normal text-[14px] text-[#000000]">Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lower Footer */}
                    <div className="h-[57px] flex flex-col max-st:h-[140px] max-mt:h-[90px]">
                        <hr className="font-black"/>

                        <div className="h-[24px] flex flex-row justify-between max-mt:flex-col max-mt:h-[58px] max-mt:items-center max-st:h-[140px] gap-[12px] max-st:items-center animation-upfooter">
                            <div className="w-[564px] h-[21px] gap-[24px] flex flex-row justify-between max-st:flex-col max-st:h-[66px] max-st:w-[400px] max-st:items-center max-mm:w-[280px]">
                                <p className="w-[195px] h-[21px] text-[14px] text-[#000000] max-lm:h-[66px]">2023 Ddsgnr. All right reserved.</p>
                                <div className="w-[345px] h-[21px] gap-[24px] flex flex-row max-st:w-[400px] max-mm:w-[280px] max-st:justify-center">
                                    <p className="w-[87px] h-[21px] font-normal text-[14px] text-[#000000] underline max-lm:text-[12px] max-mm:text-[10px]">Privacy Policy</p>
                                    <p className="w-[105px] h-[21px] font-normal text-[14px] text-[#000000] underline max-lm:text-[12px] max-mm:text-[10px]">Terms of Service</p>
                                    <p className="w-[105px] h-[21px] font-normal text-[14px] text-[#000000] underline max-lm:text-[12px] max-mm:text-[10px]">Cookies Settings</p>
                                </div>
                            </div>
                            <div className="h-[24px] gap-[12px] flex flex-row max-st:justify-center animation-upfooter">
                              <img src="/logoicons/facebook.svg" alt="facebook" width={24} height={24}/>
                              <img src="/logoicons/instagram.svg" alt="instagram" width={18} height={18}/>
                              <img src="/logoicons/twitter.svg" alt="twitter" width={18} height={18}/>
                              <img src="/logoicons/linkedin.svg" alt="linkedin" width={18} height={18}/>
                            </div>
                        </div>
                    </div>
                    <div className="h-[50px] gap-[6px] text-center flex justify-center max-st:w-[400px] max-mm:w-[350px] max-sm:w-[325px] max-lm:h-[30px] animation-downfooter">
                        <p className="h-[50px] max-mm:h-[30px] font-bold w-[575px] text-[36px] max-st:w-[400px] max-mm:w-[350px] max-sm:w-[325px] max-lt:text-[28px] max-st:text-[22px] max-mm:text-[18px] max-sm:text-[16px] content-center">Developed By Fahad Developers</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer