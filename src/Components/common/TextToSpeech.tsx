'use client'
import { IStoryDetails } from '@/config/interfaces/interfaces';
import cn from '@/lib/cn';
import { getStoryDate } from '@/utils';
import dayjs from 'dayjs';
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';


function TextToSpeech({ story }: { story: IStoryDetails }) {
    const [loading, setLoading] = useState(false)

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [showAudioPlay, setShowAudioPlay] = useState(false)

    function getByteSize(text: string): number {
        return new TextEncoder().encode(text.slice(0, 1800)).length;
    }

    function cleanHTML(html: string): string {
        if (typeof window !== 'undefined') {
            try {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');

                // Extract text content
                const text = doc.body.textContent || '';

                // Normalize whitespace and return clean text
                const cleanedText = text.replace(/[^\x00-\x7F]/g, '').trim();
                return text.replace(/\s+/g, ' ').trim();
            } catch (error) {
                console.error('Error parsing HTML:', error);
                return '';
            }
        }

        return '';
    }


    console.log(cleanHTML(story?.content || ''), 'Story')

    const published = ' প্রকাশ ' + `${getStoryDate(dayjs(story.meta?.first_published_at), true)}`

    const text = story?.title + story.blog_authors.map(author => author?.author_name).join(',') + published + ' ' + cleanHTML(story?.content || '')

    console.log('Text byte length', getByteSize(text))


    const apiKey = 'AIzaSyCxhEyqrvyWoVJGsulKShGzBMgAnod8s1M'

    const payload = {
        "audioConfig": {
            "audioEncoding": "LINEAR16",
            "effectsProfileId": [
                "handset-class-device"
            ],
            "pitch": 0,
            "speakingRate": 1
        },
        "input": {
            "text": text.slice(0, 1850)
        },
        "voice": {
            "languageCode": "bn-IN",
            "name": "bn-IN-Standard-D"
        }
    }

    const handleTextToSpeech = async () => {
        setShowAudioPlay(true)
        if (audio) {
            return
        }
        setLoading(true)
        try {
            const res = await fetch(`https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })
            const data = await res.json()
            const audio = new Audio(`data:audio/wav;base64,${data.audioContent}`)
            setAudio(audio)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className='lg:hidden' >
            {
                (!audio || !showAudioPlay) && (
                    <button
                        onClick={handleTextToSpeech}
                        disabled={loading}
                        className='flex items-center'
                    >
                        {loading && (
                            <div className="absolute border-4 border-gray-600 border-t-transparent rounded-full w-8 h-8 animate-spin"></div>
                        )}
                        <MdOutlinePlayCircleFilled
                            size={32}
                            className={cn(
                                'text-teal1',
                                {
                                    'text-gray-600': loading === true
                                }
                            )}
                        />
                    </button>
                )
            }
            {
                audio && showAudioPlay && (
                    <div className='bg-gray-200 py-5 z-[1999] fixed flex justify-center items-center left-0 right-0 bottom-0'>
                        <button
                            onClick={() => {
                                audio.pause()
                                setShowAudioPlay(false)
                            }}
                            className='absolute top-0 right-0 p-1'
                        >
                            <IoCloseOutline size={22} />
                        </button>
                        <audio controls autoPlay>
                            <source src={audio?.src} type="audio/wav" />
                        </audio>
                    </div>
                )

            }
        </div>
    )
}

export default TextToSpeech