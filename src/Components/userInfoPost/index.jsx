import "./userInfoPost.css"

export default function UserInfoPost({ image, altImage, userName, comentaryDate }) {
    return (
        <div className="userInfo">
            <div className="userPhoto">
                <img src={image} alt={altImage} border="0" />
            </div>
            <div className="username">
                {userName}
            </div>
            <div className="comentaryDate">
                {comentaryDate}
            </div>
        </div>
    )
}