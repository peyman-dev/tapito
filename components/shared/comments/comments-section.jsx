import React from 'react'
import SectionTitle from '../section-title'
import CommentsInput from './comments-input'
import CommentsArea from './comments-area'

const Comments = () => {
    return (
        <section className='mt-20'>
            <SectionTitle
                fontSize={"text-xl"}
                className={"tracking-tight mb-10"}
                title={"نظرات "}
            />

            <CommentsInput />
            <CommentsArea />
        </section>
    )
}

export default Comments