"use client"
import ContentEditor from '@/components/elements/editors/content-editor'
import FileUploader from '@/components/elements/inputs/file-uploader'
import Input from '@/components/shared/inputs/default-input'
import SectionTitle from '@/components/shared/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import useMe from '@/core/hooks/use-me'
import { X } from 'lucide-react'
import React, { useState } from 'react'

const ArticlesPage = () => {
    const me = useMe()
    const [keywords, setKeywords] = useState([])
    const [keywordValue, setKeywordValue] = useState("")
    const [content, setContent] = useState("")

    return (
        <section className="md:w-[992px] mx-auto bg-white py-20 border-x">
        <div className='max-w-[500px] mx-auto my-20 '>
            <SectionTitle
                title={"محتوای مقاله"}
            />

            <div className="my-10 space-y-5">
                <Input
                    placeholder="عنوان مقاله"
                />

                <ContentEditor
                    value={content}
                    setValue={setContent}
                />
                <FileUploader />
            </div>
            <div>

                <SectionTitle
                    color={"bg-slate-800"}
                    title={"سئو مقاله"}
                />
                <div className='mt-10 space-y-4'>
                    <Input
                        placeholder="عنوان صفحه در این مقاله"
                    />
                    <Input
                        placeholder="توضیحات صفحه در این مقاله"
                    />
                    <div>
                        <Input
                            placeholder="کلمات کلیدی مقاله"
                            onChange={setKeywordValue}
                        />
                        <div className='mt-4'>
                            <p className='text-xs'>
                                کلمات کلیدی درج شده:
                            </p>
                            <div className="child:flex child:items-center child:gap-2 child:select-none flex items-center gap-2 mt-2">
                                <Badge>
                                    تست 1
                                    <button>
                                        <X className='size-3' />
                                    </button>
                                </Badge>
                                <Badge>
                                    تست 1
                                    <button>
                                        <X className='size-3' />
                                    </button>
                                </Badge>
                                <Badge>
                                    تست 1
                                    <button>
                                        <X className='size-3' />
                                    </button>
                                </Badge>
                                <Badge>
                                    تست 1
                                    <button>
                                        <X className='size-3' />
                                    </button>
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <Button className='w-full h-10 flex-center text-white rounded-md'>
                        ایجاد مقاله
                    </Button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default ArticlesPage