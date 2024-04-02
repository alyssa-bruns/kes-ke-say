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

  // const newsData: Articles = data
  // const subsetNewsData = newsData.articles.slice(0, 6)

  // Comment the newsData mock data variable and uncomment the stuff above
  const newsData = [
    {
      id: 1,
      title: `Grippe aviaire : première mondiale, une personne infectée par une
          vache laitière - L'Indépendant`,
      author: 'Jean Pierre',
      publishedAt: '2024-12-02',
      url: 'https://youtube.com',
    },
    {
      id: 2,
      title: `Attentat à Moscou : les individus arrêtés au Daguestan sont liés à
          l'attaque - CNEWS`,
      author: 'Jean Pierre',
      publishedAt: '2023-4-02',
      url: 'https://youtube.com',
    },
    {
      id: 3,
      title: `OM - PSG : Mbappé a refait des siennes à Marseille ? - Le10sport`,
      author: 'David',
      publishedAt: '1954-4-02',
      url: 'https://youtube.com',
    },
    {
      id: 4,
      title: `OM - PSG : Mbappé a refait des siennes à Marseille ? - Le10sport`,
      author: 'David',
      publishedAt: '1954-4-02',
      url: 'https://youtube.com',
    },
    {
      id: 5,
      title: `OM - PSG : Mbappé a refait des siennes à Marseille ? - Le10sport`,
      author: 'David',
      publishedAt: '1954-4-02',
      url: 'https://youtube.com',
    },
    {
      id: 6,
      title: `OM - PSG : Mbappé a refait des siennes à Marseille ? - Le10sport`,
      author: 'David',
      publishedAt: '1954-4-02',
      url: 'https://youtube.com',
    },
  ]

  return (
    // Tailwind CSS liste card - posts - article list By maxacrea
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 ">
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="m-10 flex flex-col items-center mx-auto max-w-screen-lg">
            <div className="header flex w-full justify-center">
              <h2 className="font-black pb-10 mb-20 text-5xl text-blue-900 before:block before:absolute before:bg-sky-300 relative before:w-1/3 before:h-1 before:bottom-0 before:left-1/3 text-center">
                Jean Pierre dans Tresses collées
              </h2>
            </div>
            <div
              className="grid w-full gap-10 grid-cols-3"
              style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }}
            >
              {newsData.map(
                (
                  news //subsetNewsData.map
                ) => (
                  <div
                    key={news.id} // news.source.id
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
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

{
  /* <ul>
        {' '}
        {subsetNewsData.map((news: NewsModel) => (
          <li key={news.source.id}>
            <a href={news.url} className="text-sm mt-4">
              {news.title}
            </a>
          </li>
        ))}
      </ul> */
}
