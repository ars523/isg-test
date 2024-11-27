import cn from "@/lib/cn"
import { ClassValue } from "clsx"

function Right({ className, children }: { className?: ClassValue, children?: React.ReactNode }) {
    return (
        <div className={cn('md:col-span-1 col-span-full', className)}>
            {children}
        </div>
    )
}

export default Right