export function Hex({ type, position }) {
    return (
        <div className={`absolute h-fit w-15.3 ${position}`}>
            <img src={type} className='w-full' alt={type}></img>
        </div>
    )
}