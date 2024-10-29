export const Header = () => {
	return (
		<header className='bg-gray-800 border-black w-full flex justify-between items-center px-40 py-6'>
			<img 
			className='w-[175px]'
			src='https://www.techmahindra.com/themes/custom/techm/techm_logo.svg'/>
			<ul className='flex items-center gap-4 uppercase text-white'>
				<li className='font-bold cursor-pointer border-b border-b-black hover:border-b-white transition-all'>
					Keep up
				</li>
				<li className='font-bold cursor-pointer border-b border-b-black hover:border-b-white transition-all'>
					About us
				</li>
			</ul>
		</header>
	)
}
