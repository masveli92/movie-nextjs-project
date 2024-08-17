'use client'
import {FC} from "react";
import StarRatings from 'react-star-ratings';

interface IProps {
    children: number
}

const StarsRating:FC<IProps> = ({children}) => {

    return(
        <div>
            <StarRatings rating={(children/2)}
                         numberOfStars={5}
                         starRatedColor={'#F38E2E'}
                         starEmptyColor={'#D4D6D5'}
                         starDimension={'22px'}
                         starSpacing={'2px'}/>
        </div>
    )
};

export {StarsRating};

