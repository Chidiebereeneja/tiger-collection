import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


export const RateStar = function(num) {
    const starNum = Number(num)

    if(starNum === 1) {
        return (
            <figcaption className="flex self-start gap-1">
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
            </figcaption>
        )
    }else if(starNum === 2) {
        return (
            <figcaption className="flex self-start gap-1">
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
            </figcaption>
        )
    } else if(starNum === 3) {
        return (
            <figcaption className="flex self-start gap-1">
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
            </figcaption>
        )
    }else if(starNum === 4) {
        return (
            <figcaption className="flex self-start gap-1">
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
            </figcaption>
        )
    } else if(starNum === 5) {
        return (
            <figcaption className="flex items-start gap-1">
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>
                <MdOutlineStarPurple500 className="starStyle"/>

            </figcaption>
        )
    } else {
        return (
            <figcaption className="flex items-start gap-1">
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>
                <MdOutlineStarOutline className="starStyle"/>

            </figcaption>
        )
    }

}