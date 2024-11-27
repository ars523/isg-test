import { ReactNode } from "react";
import cn from "../../lib/cn"
type Props = {
  children: ReactNode;
  className?: string;
};
function Section({ children, className }: Props) {
  return (
    <section className={cn("mb-10", className)}>
      {children}
    </section>
  );
}

export default Section;
