import {card} from "../assets"
import styles , {layout} from "../style"
import Button from './Button'
const CardDeal = () =>{
    return (
        <section className={`${layout.section} text-white`}>
            <div className={`${layout.section}`}></div>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden '/> in few easy step</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Elit enil sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fucse ipsum orci rhoncus aliporttior integer platea placerat.</p>
            <Button styles="mt-10 "/>
            </div>
            <div className={layout.sectionImg}>
                <img src={card} alt="card" className="w-[100%] h-[100%]" />
            </div>
        </section>
    )
}

export default CardDeal
