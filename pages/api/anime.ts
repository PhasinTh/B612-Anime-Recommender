import type { NextApiRequest, NextApiResponse } from "next";
let animes = require("./data/anime.json");

type Anime = {
  anime_id: string;
  name: string;
  anime_url: string;
  title: string;
  synopsis?: string;
  main_pic?: string;
  type?: string;
  source_type?: string;
  num_episode?: number;
  status?: string;
  start_date: string;
  studios: string;
  genres?: string;
  pics?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Anime[]>
) {
  const sorted = animes
    .sort(
      (a: Anime, b: Anime) =>
        new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
    )
    .slice(0, 20);
  res.status(200).json(sorted);
}
