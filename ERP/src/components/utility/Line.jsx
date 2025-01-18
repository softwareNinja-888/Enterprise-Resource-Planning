export function Line({direction = 'horizontal',width='w-full',color='main'}){
    return(
        <div className={direction === 'horizontal' ? `h-1 bg-main ${width}` : `h-full w-px bg-main ${width}`}></div>
    )
}