import useNews from '../hooks/useNews.ts'
import { Articles, News as NewsModel } from '../../models/news.ts'

export default function News() {
  // const { data, isLoading, isError } = useNews()

  // if (isLoading) {
  //   return <p>wait</p>
  // }

  // if (isError) {
  //   return <p>Oops</p>
  // }

  // const newsData: Articles = data
  // const subsetNewsData = newsData.articles.slice(0, 5)

  return (
    <div>
      <h1>News</h1>
      <ul>
        <li>
          Grippe aviaire : première mondiale, une personne infectée par une
          vache laitière - L'Indépendant
        </li>
        <li>
          Attentat à Moscou : les individus arrêtés au Daguestan sont liés à
          l'attaque - CNEWS
        </li>
        <li>
          OM - PSG : Mbappé a refait des siennes à Marseille ? - Le10sport
        </li>
        <li>
          OM-PSG: l'incompréhension de Dugarry après les explications de
          l'arbitre sur ses décisions litigieuses - RMC Sport
        </li>
        <li>
          Nanterre: le corps d'une femme, disparue depuis 2017, retrouvé dans le
          coffre d'une voiture - BFM Paris Ile-de-France
        </li>
      </ul>
      {/* <ul>
        {' '}
        {subsetNewsData.map((news: NewsModel) => (
          <li key={news.source.id}>
            <a href={news.url} className="text-sm mt-4">
              {news.title}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
