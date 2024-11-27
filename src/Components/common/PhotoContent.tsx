'use client';
import { IStoryDetails } from '@/config/interfaces/interfaces'
import React, { useState } from 'react'
import PhotoItem from './PhotoItem'
import { PhotoSlider } from "react-photo-view";


function PhotoContent({ story, referer }: { story: IStoryDetails, referer: string }) {
    const [visible, setVisible] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0)
    const isBrowser = typeof window !== "undefined";
    return (
        <div>
            <PhotoItem
                caption={story?.photo_thumbnail?.caption || ""}
                thumbnail={story?.photo_thumbnail?.download_url || ""}
                content={story?.content || ""}
                title={story?.title || ""}
                shareUrl={referer || ""}
                hadlePhotoItemClick={() => {
                    setVisible(true);
                    setPhotoIndex(0)
                }}
            />
            {story?.gallery_images &&
                story?.gallery_images.map((item, index) => (
                    <PhotoItem
                        key={index}
                        caption={item.caption}
                        thumbnail={item.image.meta.download_url}
                        content={item.content}
                        title={story?.title || ""}
                        shareUrl={referer || ""}
                        hadlePhotoItemClick={() => {
                            setVisible(true);
                            setPhotoIndex(index + 1)
                        }}
                    />
                ))}

            {isBrowser && (
                <PhotoSlider
                    images={[{ src: story?.photo_thumbnail?.download_url || "", key: 0 }, ...story?.gallery_images?.map((item, index) => ({ src: item.image.meta.download_url, key: index + 1, caption: story.photo_thumbnail?.caption })) || []]}
                    visible={visible}
                    onClose={() => setVisible(false)}
                    index={photoIndex}
                    onIndexChange={(index) => setPhotoIndex(index)}
                    overlayRender={({ images }) => {
                        return (
                            <>
                                {
                                    photoIndex > 0 ? (
                                        <>
                                            {
                                                story?.gallery_images && images.length > 0 && (
                                                    <div className="absolute left-0 bottom-0 z-50 w-full py-4 text-center bg-black bg-opacity-60 flex items-center justify-center">
                                                        <div className="text-white ml-4 text-lg">{story?.gallery_images[photoIndex - 1]?.caption}</div>
                                                    </div>
                                                )
                                            }
                                        </>
                                    ) : (

                                        <div className="absolute left-0 bottom-0 z-50 w-full py-4 text-center bg-black bg-opacity-60 flex items-center justify-center">
                                            <div className="text-white ml-4 text-lg">{story?.photo_thumbnail?.caption}</div>
                                        </div>

                                    )
                                }
                            </>
                        )
                    }}
                // toolbarRender={({ onScale, scale, onClose }) => {
                //     return (
                //         <>
                //             <button onClick={() => onScale(scale + 1)}>+</button>
                //             <button onClick={() => onScale(scale - 1)} >-</button>
                //         </>
                //     );
                // }}
                />
            )}
        </div>
    )
}

export default PhotoContent