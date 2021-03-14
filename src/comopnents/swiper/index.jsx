import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide, } from 'swiper/react';
import "swiper/swiper.min.css"

SwiperCore.use([Autoplay])
const MySwiper = () => {

    const items = [
        {
            image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3342838004,200082092&fm=11&gp=0.jpg',
            title: '图片1',
        },
        {
            image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3342838004,200082092&fm=11&gp=0.jpg',
            title: '图片1',
        }
    ];
    return (
        <Swiper
            autoplay={true}
            loop={true}

        >

            {items.map((v, i) => {
                return (
                    <SwiperSlide key={i}><img style={{ width: '100vw' }} src={v.image} alt="" /></SwiperSlide>
                )
            })}
        </Swiper>

    )
}

export default MySwiper