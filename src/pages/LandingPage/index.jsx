import { NavBar, HeroSection, Footer } from '../../components';
import BackToTop from '../../components/backtotop';
import Content from '../../components/content';

const LandingPage = () => {
  return (
    <>

    <div className={'flex flex-col items-start justify-center gap-20 '}>
      <NavBar />
      <HeroSection />
      <Content />
      <Footer />
    </div>

    <div>
      <BackToTop />
    </div>

    </>
  );
};

export default LandingPage;
