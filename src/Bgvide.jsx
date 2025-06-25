import bgvideo from '../src/assets/bgvideo.mp4'
import './Movie.css'

export const  Bgvideo = ()=>{
    return(
        <>
        <div className="video-container">
            <video src={bgvideo} className='bg_video'  autoPlay muted loop></video>
        </div>
        </>
    )
}