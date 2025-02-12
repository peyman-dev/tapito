import HeaderAds from '@/components/ads/header-banner'
import HeroSlider from '@/components/layouts/home/hero-carousel'
import Roadmaps from '@/components/elements/sections/roadmaps'
import ClientHeader from '@/components/layouts/header'
import ArticleCard from '@/components/shared/cards/article-card'
import Container from '@/components/shared/Container'
import MainContainer from '@/components/shared/MainContainer'
import SectionTitle from '@/components/shared/section-title'
import React from 'react'
import HomeMainBanner from '@/components/elements/sections/main-banner'
import MostViewed from '@/components/layouts/home/most-viewed'
import Suggestions from '@/components/elements/sections/suggestions'

const Home = () => {
  return (
    <>
      {/* <HeaderAds /> */}
      <ClientHeader />

      {/* MainContainer means <main> element for wrapping all contents into the this section  */}
      <MainContainer>
        <HeroSlider />

        <Container className="mt-10">
          <SectionTitle title={"پیشنهادات روز"} className="mb-10" />
          <Suggestions />
          <HomeMainBanner className='mb-10' />
          <MostViewed />
        </Container>
      </MainContainer>

    </>
  )
}

export default Home