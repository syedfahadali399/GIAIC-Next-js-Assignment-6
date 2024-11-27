import Header from "./components/header/header";
import LandingPage from "./components/landingpage/landingpage";
import LogoSection from "./components/logoSection/page";
import CoursesStickerSection from "./components/coursesStickerSection/page";
import AchievementSection from "./components/achievementSection/page";
import CoursesImgSection from "./components/coursesImgSection/page";
import TeamSection from "./components/teamSection/page";
import ReviewSection from "./components/reviewSection/page";
import Footer from "./components/footer/page";

export default function Home() {
  return (
    <>
      <Header></Header>
      <LandingPage></LandingPage>
      <LogoSection></LogoSection>
      <CoursesStickerSection></CoursesStickerSection>
      <AchievementSection></AchievementSection>
      <CoursesImgSection></CoursesImgSection>
      <TeamSection></TeamSection>
      <ReviewSection></ReviewSection>
      <Footer></Footer>
    </>
  );
}
