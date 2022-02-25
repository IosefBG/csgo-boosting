// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async (req:any, res:any) => {
//   const data = req.body;
//   try {
//     const result = await prisma.payments.create({
//       data: {
//         ...data,
//       },
//     });
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(403).json({ err: "Error occured while adding a new checkout." });
//   }
// };



import { MongoClient } from "mongodb"

export default async (req: any, res: any) => {
  const uri: any = process.env.MONGODB_URI;
  const client = new MongoClient(uri);
  interface Haiku {
    ordernumber: string;
    email: string;
    type: any;
    details: any;
    amount: any;
    date: any;
  }
  const { body } = req
  try {
    await client.connect();

    const database = client.db("myFirstDatabase");
    const haiku = database.collection<Haiku>("checkouts");
    await haiku.insertOne({ ordernumber: body.ordernumber, email: body.email, type: body.type, details: body.details, amount: body.amount, date: body.date });
    res.status(200).json({ result: "success" })
  } catch (e) {
    console.error(e)
    res.status(500).send(e)
  }
}

