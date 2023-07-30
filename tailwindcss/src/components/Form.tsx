function Form() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Youtube Thumbnail Downloader
          </h2>
          <form className="mt-4 space-y-4 lg:mt- md:space-y-5">
              <div>
                  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Youtube Url</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Youtube Url" />
              </div>
              <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
          </form>
      </div>
  </div>
</section>
    );
}
export default Form;