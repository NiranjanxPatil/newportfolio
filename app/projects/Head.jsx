import React from 'react'
import { Header } from 'next/dist/lib/load-custom-routes'
import Link from "next/link";

const ProjectHeader = () => {
  return (
    <header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm bg-slate-800 ">
			<div className="container-md">
				<div className="flex justify-between items-center gap-3 text-white  ">
					<h1 className='text-4xl font-semibold'>
						PROJECT SECTION  	
					</h1>
					
					<Link
								href="@/app"
								tabIndex="0"
								className="btn"
								aria-label="Latest projects"
							>
								baccck
							</Link>
					
				</div>
			</div>
		</header>
  )
}

export default ProjectHeader