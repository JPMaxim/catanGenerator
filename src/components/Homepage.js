import { useState } from 'react';
import { Board } from './Board';
import { randomizeHexes } from '../functions/randomizeHexes';
import { randomizeHarbours } from '../functions/randomizeHarbours';

export function Homepage() {
    const [hexes, setHexes] = useState(['mountain', 'pasture', 'forest', 'field', 'hill', 'pasture', 'hill', 'field', 'forest', 'desert', 'forest', 'mountain', 'forest', 'mountain', 'field', 'pasture', 'hill', 'field', 'grassland'])
    const [harbours, setHarbours] = useState('')

    function handleClick() {
        setHexes(randomizeHexes())
        setHarbours(randomizeHarbours())
    }

    return (
        <div className="flex flex-col 
        laptop:h-svh laptop:flex-row">
            
            <div className='bg-white flex justify-center items-center
            laptop:h-full laptop:w-1/3'>
                <button onClick={handleClick} className='bg-catan-cream h-0 p-6 flex items-center rounded-btn border border-black'>Generate New Board</button>
            </div>

            <div className=' bg-slate-100
            laptop:h-full laptop:w-2/3 laptop: flex laptop:items-center'>

                <Board
                    hexes={hexes}
                    harbours={harbours}
                />
            </div>
        </div>
    )
}
