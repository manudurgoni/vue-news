import axios from 'axios'

export const getArticles = async () => {
  const json = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return json.data
}

export const getArticleByID = async (id) => {
  const json = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return json.data
}