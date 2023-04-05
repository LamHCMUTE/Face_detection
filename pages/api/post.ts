import { NextApiHandler } from "next/types";

const handler: NextApiHandler=(req,res) =>{
    const {method}=req;
    switch (method){
        case "GET":
            return res.json({ok:true});
        default:
            return res.status(404).send("Not found");
    }

}
export default handler;