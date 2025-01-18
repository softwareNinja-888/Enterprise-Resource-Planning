import { Banner } from './Banner'
import bg from '/bg/bg.avif'
export function Hero(){
    return (
        <>
            <div className="hero h-[426px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})`, }}>
                <div className="hero-overlay bg-opacity-0"></div>
            </div >
            <Banner/>
        </>
    )
}



