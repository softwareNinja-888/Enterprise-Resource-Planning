export function Logo({theme='secondary'}){
	return (
		<div className={`navbar-start border-4 border-${theme} w-32 flex justify-center px-8 py-3`}>
            <a className={`text-xl font-poppins text-${theme}`}>EPS</a>
        </div>
	)
}