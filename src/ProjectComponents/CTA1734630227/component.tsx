import React from 'react';

const CTA = () => {

	return (
	  <div className="w-full h-full min-h-0 flex flex-col bg-gray-50 overflow-y-auto overflow-x-hidden">
		<div className="w-full px-4 py-8">
		  <div className="relative max-w-7xl mx-auto">
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl overflow-hidden">
			  <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16">
				<div className="max-w-lg mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
				  <div>
					<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
					  Ready for a Quack-tastic Journey?
					</h2>
					<p className="mt-4 text-lg text-blue-100">
					  Sign up now and start your own DuckTales adventure!
					</p>
					<div className="mt-8 flex space-x-4">
					  <button
						className="px-8 py-3 rounded-lg font-medium text-base
						  transition-all duration-200 ease-in-out
						  bg-white text-blue-600 hover:bg-gray-50
						  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					  >
						Let's Get Quacking!
					  </button>
					</div>
				  </div>
  
				  <div className="mt-12 lg:mt-0 lg:ml-8">
					<div className="bg-white rounded-lg shadow-md p-8">
  
					  {/* Stats */}
					  <dl className="space-y-6">
						{[
						  { value: '1000+', label: 'Happy Clients' },
						  { value: '24/7', label: 'Expert Support' },
						  { value: '99.9%', label: 'Uptime Guarantee' }
						].map((stat, index) => (
						  <div key={index} className="flex">
							<dt className="flex-1">
							  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
							  <p className="mt-1 text-2xl font-extrabold text-blue-600">{stat.value}</p>
							</dt>
						  </div>
						))}
					  </dl>
					</div>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export { CTA as component };