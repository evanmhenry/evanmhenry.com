import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import HamburgerMenu from './HamburgerMenu'
import Logo from '@/assets/evanmhenry-icon.svg'
import { NavMenuOptions, SITE_NAME } from '@/pages/SITE_CONTENT'

const Header = () => {
	const location = useLocation()
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
	// const [searchOpen, setSearchOpen] = useState(false)

	// const handleSearch = () => setSearchOpen(!searchOpen)

	// useEffect(() => {
	// 	const handleKeyDown = (e: KeyboardEvent) => {
	// 		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
	// 			e.preventDefault()
	// 			handleSearch()
	// 		}
	// 	}

	// 	document.addEventListener('keydown', handleKeyDown)
	// 	return () => document.removeEventListener('keydown', handleKeyDown)
	// }, [])

	const isDocsLayout = location.pathname.startsWith('/docs')

	return (
		<>
			<header className={`z-20 sticky top-0 w-full border-b transition-all duration-300 glassmorphism ${hamburgerMenuOpen ? 'h-screen' : 'h-16'}`}>
				<div className='container max-w-screen-2xl'>
					<div className='flex justify-between w-full items-center h-16'>
						<div className='flex items-center justify-between gap-1 w-full'>
							<div className='flex items-center gap-4 w-full justify-between'>
								<a href='/'>
									<div className='flex items-center gap-2 text-2xl font-semibold'>
										<a href='/'>
											<img alt='Logo' className='h-8 flex-none hover:cursor-pointer' src={Logo} />
										</a>
										<span className={`${isDocsLayout ? 'hidden' : ''} md:flex`}>{SITE_NAME}</span>
									</div>
								</a>
								{/* <Button
									variant='outline'
									size='sm'
									className={`${isDocsLayout ? '' : 'hidden'} md:flex text-muted-foreground gap-2 text-left w-56 justify-between`}
									onClick={handleSearch}
								>
									<div className='flex items-center gap-2'>
										<Search size={16} strokeWidth={2} />
										Search...
									</div>
									<kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'>
										<span className='text-xs'>⌘</span>K
									</kbd>
								</Button> */}
								<HamburgerMenu isOpen={hamburgerMenuOpen} setIsOpen={setHamburgerMenuOpen} className='md:hidden' />
							</div>
							<div className='hidden md:flex gap-1 md:items-center'>
								{NavMenuOptions.map((option) => (
									<Button variant='ghost' key={option.name}>
										<option.type to={option.path}>{option.name}</option.type>
									</Button>
								))}
							</div>
						</div>
					</div>

					{/* DROP DOWN MENU */}
					<div
						className={`absolute overflow-hidden transition-all duration-500 ease-in-out transform ${
							hamburgerMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
						} w-full gap-4 pt-6 `}
					>
						<div className='flex flex-col gap-8'>
							<div className='flex flex-col gap-3'>
								{/* <Button type='button' variant='brandGradient' size='lg' onClick={handlePrimaryCtaClick}>
								Contact Sales
							</Button>
							<Button
								type='button'
								variant='outline'
								size='lg'
								// onClick={handleSignInClick}
							>
								Sign in
							</Button> */}
							</div>
							<div className='flex flex-col gap-6'>
								{NavMenuOptions.map((option) => (
									<div key={option.name} className='text-3xl font-medium'>
										<option.type to={option.path} onClick={() => setHamburgerMenuOpen(false)}>
											{option.name}
										</option.type>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <SearchDialog open={searchOpen} setOpen={setSearchOpen} /> */}
		</>
	)
}

export default Header
