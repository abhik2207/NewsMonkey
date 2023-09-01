import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div className='my-3'>
            <div className="card my-3">
                <div style={{position:"absolute", right:"5px", top:"5px"}}>
                    <span className="badge rounded-pill bg-danger" style={{fontSize:"12px"}}>
                        {source}
                    </span>
                </div>
                <img style={{width:"100%", height:"250px", objectFit:"cover"}} src={!imageUrl?"https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8=":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}....</p>
                    <p className="card-text"><small className="text-muted">By {!author?"Anonymous":author} on {new Date(date).toUTCString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
