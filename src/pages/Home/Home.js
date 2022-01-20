import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Infromation";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Section/Section";
import { getArticleData } from "../../Redux/actions/article";
import { useSelector } from "react-redux";
// import SubArticle from "../../components/SubArticle/SubArticle";
import { changeLanguage } from "../../Redux/actions/changingLanguage";
import englishLanguageData from "../../data/englishLanguageData";
import chakmaLanguageData from "../../data/chakmaLanguageData";
import Comment from "../../components/Review/ShowReview";
import { Suspense } from "react";
const SubArticle = React.lazy(() =>
  import("../../components/SubArticle/SubArticle")
);

const Home = () => {
  const dispatch = useDispatch();
  const articleData = useSelector((state) => state.articleReducer.fetchDAta);
  const currentLanguage = useSelector(
    (state) => state.languageReducer.changeToChakmaLange
  );

  useEffect(() => {
    dispatch(getArticleData());
    dispatch(changeLanguage(false));
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      {currentLanguage ? (
        <>
          <Banner props={chakmaLanguageData} />
          <Section props={chakmaLanguageData} />
          <About props={chakmaLanguageData} />
          <Suspense fallback={() => <div>Loading.....</div>}>
            <SubArticle data={articleData} />
          </Suspense>

          <Comment />
          <Information props={chakmaLanguageData} />
          <Footer props={chakmaLanguageData} />
        </>
      ) : (
        <>
          <Banner props={englishLanguageData} />
          <Section props={englishLanguageData} />
          <About props={englishLanguageData} />
          <Suspense fallback={() => <div>Loading.....</div>}>
            <SubArticle data={articleData} />
          </Suspense>
          <Comment />
          <Information props={englishLanguageData} />
          <Footer props={englishLanguageData} />
        </>
      )}
    </div>
  );
};

export default Home;
