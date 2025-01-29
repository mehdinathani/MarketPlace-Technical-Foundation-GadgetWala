'use client'
import { Rating } from 'react-simple-star-rating'


interface Props {
    rating: number
}
export default function StarRatingComponent({ rating }: Props) {
    return <div className='flex flex-row'>
        <Rating
            SVGstyle={{ 'display': 'inline' }}


            size={20}
            transition={true}
            initialValue={rating}
            readonly={true}
        /* Available Props */
        />
    </div>
}