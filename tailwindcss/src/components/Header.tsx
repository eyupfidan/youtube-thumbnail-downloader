function Header() {
  return (
<header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="https://flowbite.com" className="flex items-center">
                <img src="favicon.png" className="mr-3 h-6 sm:h-9" alt="Youtube Thumbnail Downloader Favicon" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YT Thumbnail Downloader</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="https://github.com/eyupfidan/youtube-thumbnail-downloader" target="_blank" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Github Repo</a>
            </div>
        </div>
    </nav>
</header>  );
}

export default Header;
