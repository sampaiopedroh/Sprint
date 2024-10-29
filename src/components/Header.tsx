export const Header = () => {
	return (
		<header className='border border-black w-full flex justify-between items-center px-20 py-6'>
			<img 
			className='w-[175px]'
			src='https://www.techmahindra.com/themes/custom/techm/techm_logo.svg'/>
			<ul className='flex items-center gap-4 uppercase'>
				<li className='font-bold cursor-pointer border-b border-b-white hover:border-b-black transition-all'>
					Keep up
				</li>
				<li className='font-bold cursor-pointer border-b border-b-white hover:border-b-black transition-all'>
					About us
				</li>
			</ul>
		</header>
	)
}
