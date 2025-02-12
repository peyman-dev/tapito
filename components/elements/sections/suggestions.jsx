"use client"
import ArticleCard from '@/components/shared/cards/article-card'
import withAnimation from '@/utils/wrappers/withAnimation'
import React from 'react'

const Suggestions = () => {
    return (
        <section className='mb-20 space-y-10'>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </section>
    )
}

export default withAnimation(Suggestions)