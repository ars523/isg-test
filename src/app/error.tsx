'use client'

export default function Error({
    error,
    reset,
    message,
}: {
    error: Error & { digest?: string },
    message?: string,
    reset: () => void
}) {
    return (
        <div className='py-16'>
            <h2 className='text-center text-red-500 font-bold text-2xl'>Something went wrong!</h2>
        </div>
    )
}