import { arrow, hand_icon, hero_image } from '@images/index'
import './Hero.css'

export const Hero = () => {
  return (
    <div className='hero flex'>
      <div className='hero-left flex flex-1 flex-col justify-center gap-5 leading-[1.1]'>
        <h2 className='text-[#090909] lg:text-4xl md:text-3xl text-2xl font-semibold'>NEW ARRIVALS ONLY</h2>
        <div className=''>
          <div className='hero-hand-icon flex items-center gap-5'>
            <p>new</p>
            <img src={hand_icon} alt='HAND-ICON' />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-lastes-btn flex justify-center items-center gap-4 w-80 h-16 rounded-full mt-7 bg-red-500 text-white text-xl'>
          <span>Latest Collection</span>
          <img src={arrow} alt='ARROW' />
        </div>
      </div>
      <div className='hero-right flex flex-1 justify-center'>
        <img src={hero_image} alt='HERO_IMAGE' className='object-cover' />
      </div>
    </div>
  )
}
