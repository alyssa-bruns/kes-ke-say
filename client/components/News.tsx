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

  const newsData: Articles = data
  const subsetNewsData = newsData.articles.slice(0, 5)

  return (
    <div>
      <h1>News</h1>
      <ul>
        {' '}
        {subsetNewsData.map((news: NewsModel) => (
          <li key={news.source.id}>
            <a href={news.url} className="text-sm mt-4">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
