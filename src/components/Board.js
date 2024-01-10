import { Hex } from './Hex'
import { useState } from 'react'
import desert from '../images/desert.png'
import field from '../images/field.png'
import forest from '../images/forest.png'
import hill from '../images/hill.png'
import mountain from '../images/mountain.png'
import pasture from '../images/pasture.png'
import ocean from '../images/ocean.png'


export function Board({ hexes, harbours }) {

    const hexPositions = ['bottom-70.5 left-27.9', 'bottom-70.5 left-42.8', 'bottom-70.5 left-57.8', 'bottom-56.2 left-20.3', 'bottom-56.2 left-35.1', 'bottom-56.2 left-50.1', 'bottom-56.2 left-65', 'bottom-41.8 left-12.5', 'bottom-41.8 left-27.6', 'bottom-41.8 left-42.5', 'bottom-41.8 left-57.5', 'bottom-41.8 left-72.3', 'bottom-27.5 left-20', 'bottom-27.5 left-35', 'bottom-27.5 left-49.9', 'bottom-27.5 left-64.9', 'bottom-13.1 left-27.4', 'bottom-13.1 left-42.3', 'bottom-13.1 left-57.3']

    return (
        <div className='w-full relative'>

            <div className="h-0 w-3/4 m-auto relative bg-harbours bg-contain bg-no-repeat pt-board z-10">

                {hexes.map((el, index) => {
                    let image
                    switch (el) {
                        case 'mountain':
                            image = mountain
                            break;
                        case 'hill':
                            image = hill
                            break;
                        case 'field':
                            image = field
                            break;
                        case 'desert':
                            image = desert
                            break;
                        case 'pasture':
                            image = pasture
                            break;
                        default:
                            image = forest
                            break;
                    }
                    return (
                        <Hex
                            type={image}
                            position={hexPositions[index]}
                        />
                    )
                })}

            </div>

            {/* just boxes to fill out any gaps between hexes with a like-for-like bg-color */}
            <div className='absolute left-30 bottom-13.1 h-80 w-41.8 bg-catan-cream z-0'></div>
            <div className='absolute left-60 bottom-27.6 h-50.1 w-20 rounded-bgCreamDiv bg-catan-cream z-0'></div>
            <div className='absolute left-21 bottom-27.6 h-50.1 w-20 rounded-bgCreamDiv bg-catan-cream z-0'></div>

        </div>
    )
}