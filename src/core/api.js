import axios from "axios";

const TOKEN = process.env. API_TOKEN
export const getArticles = async ({
  limit = 15,
  page = 0
}) => {
  const json = await axios.get(`https://dummyapi.io/data/v1/post?limit=${limit}&page=${page}`, {
    headers: {
      'app-id': TOKEN
    }
  });
  return { ...json.data };
  // const json = JSON.parse(localStorage.getItem('home.json'))
  // return { ...json }
};

export const getArticleByID = async (id) => {
  const json = await axios.get(
    `https://dummyapi.io/data/v1/post/${id}`,
    {
      headers: {
        'app-id': TOKEN
      }
    }
  );
  return { ...json.data };

  // const json = JSON.parse(localStorage.getItem('single.json'))
  // return { ...json }
};
