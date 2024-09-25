// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { data } = await axios.get("https://api.lanyard.rest/v1/users/594576995090956313");

  res.status(200).json(data);
}
