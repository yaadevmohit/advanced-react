import { ReactNode } from "react"

type MarqueeProps = {
    children: ReactNode;
}

const Marquee: React.FC<MarqueeProps> = (props) => {
    return (
        <div className="marquee">
            <h1>{props.children}</h1>
        </div>
    )
}

export default Marquee