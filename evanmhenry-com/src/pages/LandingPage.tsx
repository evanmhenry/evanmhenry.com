import BookSummaryCard from '../components/ui/BookSummaryCard'
import { bookSummaries, projects } from './SITE_CONTENT'
import ProjectCard from '../components/ui/ProjectCard'
import { Button } from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
	const navigate = useNavigate()

	return (
		<div className='flex flex-col container max-w-3xl gap-16 my-8'>
			<div className='flex flex-col gap-6 justify-center h-full w-full text-primary'>
				<div className='flex flex-col gap-1'>
					<div className='text-sm text-zinc-500'>My Work</div>
					<div className='text-2xl font-semibold'>Projects I'm Building</div>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
					{projects.map((work) => (
						<ProjectCard title={work.title} description={work.description} url={work.url} image={work.image} />
					))}
				</div>

				<div className='flex flex-col gap-1'>
					<div className='text-sm text-zinc-500'>Summaries</div>
					<div className='text-2xl font-semibold'>Book Summaries I've Written</div>
				</div>
				<div className='flex gap-6 overflow-x-auto'>
					{bookSummaries.map((summary) => (
						<BookSummaryCard title={summary.title} author={summary.author} path={summary.path} />
					))}
				</div>
				<Button variant='outline' onClick={() => navigate('/book-summaries')}>
					View more summaries
				</Button>
			</div>
		</div>
	)
}

export default LandingPage
