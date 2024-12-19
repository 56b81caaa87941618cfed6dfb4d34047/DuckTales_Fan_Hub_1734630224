import React from 'react';

const Newsletter = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setEmail('');
  };

  return (
    <div className="h-full w-full bg-blue-600 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-full p-4 max-w-full">
        <div className="w-full max-w-3xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Stay in the Duck-Loop!
            </h2>
            <p className="text-sm md:text-base text-blue-100 mb-6">
              Subscribe for exclusive DuckTales news, updates, and special offers!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors flex-shrink-0"
                >
                  Join the Flock
                </button>
              </div>
              <p className="text-xs md:text-sm text-blue-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Newsletter as component };