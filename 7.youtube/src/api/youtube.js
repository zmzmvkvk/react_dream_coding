import axios from "axios";

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  // this.httpClient = axios.create({
  //   baseURL: "https://www.googleapis.com/youtube/v3/",
  //   params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
  // });
  async #searchByKeyword(keyword) {
    console.log(import.meta.env.VITE_YOUTUBE_API_KEY);
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet",
          maxResults: 10,
          chart: "mostPopular",
          regionCode: "kr",
        },
      })
      .then((res) => res.data.items);
  }
}
