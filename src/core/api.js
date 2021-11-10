import axios from 'axios'

export const getArticles = async () => {
  const json = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(json)
  return json.data
}

export const getArticleByID = (id) => {
  console.log(`get article with id ${id}`)
}