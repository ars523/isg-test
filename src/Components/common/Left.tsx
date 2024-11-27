import cn from "@/lib/cn"
import { ClassValue } from "clsx"

function Left({ className, children }: { className?: ClassValue, children?: React.ReactNode }) {
    return (
        <div className={cn('md:col-span-3 col-span-full', className)}>
            {children}
        </div>
    )
}

export default Left