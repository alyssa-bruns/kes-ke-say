import useNews from '../hooks/useNews.ts'
import { Articles, News as NewsModel } from '../../models/news.ts'

export default function News() {
  const { data, isLoading, isError } = useNews()

  if (isLoading) {
    return <p>wait</p>
  }

  if (isError) {
    return <p>Oops</p>
  }

  const subsetNewsData: Articles = data
  const newsData = subsetNewsData.articles.slice(0, 6)

  return (
    // Tailwind CSS liste card - posts - article list By maxacrea
    <div className="flex justify-center items-center bg-gray-50">
      <div className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 ">
        <div className="relative flex flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="m-10 flex flex-col items-center mx-auto max-w-screen-lg">
            <div className="header flex w-full justify-center">
              <h2 className="font-black pb-10 mb-20 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300 relative before:w-1/3  before:h-1 before:bottom-0 before:left-1/3 text-center">
                Jean Pierre dans Tresses collées
              </h2>
            </div>
            <div className="grid w-full gap-10 grid-cols-3">
              {newsData.map((news) => (
                <div
                  key={news.author}
                  className="bg-white w-full rounded-lg shadow-md flex flex-col transition-all overflow-hidden hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="pb-3 mb-4 border-b border-stone-200 text-xs font-medium flex justify-between text-blue-900">
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        {new Date(news.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="mb-4 font-semibold text-2xl">
                      <a
                        href={news.url}
                        className="transition-all text-blue-900 hover:text-blue-600"
                      >
                        {news.title}
                      </a>
                    </h3>
                    <p className="text-sky-800 text-sm mb-0">
                      Article by {news.author}
                    </p>
                  </div>
                  <div className="mt-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
