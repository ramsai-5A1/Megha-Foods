import { FARMERS_FRIEND_IMAGE } from "../helper/constants"

const Body = () => {
    return (
        <div>
            <AboutPart/>
        </div>
    )
}

const AboutPart = () => {
    return (
        <div className="bg-customBlue w-full h-96">
            <div>
                <img alt="image-1" src={FARMERS_FRIEND_IMAGE}/>
            </div>
        </div>
    )
}

export default Body