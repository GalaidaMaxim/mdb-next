import { createUser } from "@/db/createUser";
import corsMiddleware from "@/service/cors";

export default async function handler(req, res) {
  try {
    await corsMiddleware(req, res);
    const body = req.body;
    const user = await createUser(body);
    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.log(err);
  }
}
