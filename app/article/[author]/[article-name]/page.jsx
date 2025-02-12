"use client"
import ArticleBody from '@/components/layouts/article/article-body'
import ArticleHeader from '@/components/layouts/article/article-header'
import ClientHeader from '@/components/layouts/header'
import AuthorDetails from '@/components/shared/cards/author-details'
import SidebarNewsCard from '@/components/shared/cards/sidebar-news-card'
import Comments from '@/components/shared/comments/comments-section'
import Container from '@/components/shared/Container'
import MainContainer from '@/components/shared/MainContainer'
import SectionTitle from '@/components/shared/section-title'
import { useParams } from 'next/navigation'
import React from 'react'

const ArticlePage = () => {
    const params = useParams()

    return (
        <>
            <ClientHeader />
            <MainContainer>
                <Container className="mt-5">
                    <ArticleHeader />
                    <section className='flex gap-10' >
                        <section>
                            <ArticleBody />
                            <AuthorDetails />
                            <Comments />
                        </section>
                        <div className='w-full p-5'>
                            <aside className='space-y-6'>
                                <SectionTitle
                                    title={"بیشتر بخوانید"}
                                    fontSize={"text-lg"}
                                    className={"mb-10"}
                                />
                                <SidebarNewsCard />
                                <SidebarNewsCard />
                            </aside>
                        </div>
                    </section>
                </Container>
            </MainContainer >
            <div className='mt-40'></div>
        </>
    )
}

export default ArticlePage