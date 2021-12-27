import dbConnect from '../../utils/dbConnect';
import Note from '../../models/Note';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        // get all user data
        case 'GET':
            try {
                const notes = await Note.find({});

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        // register user    
        case 'POST':
            var nownic=req.body.nic;
            try{
                const resnote = await Note.find({nic:nownic});
                console.log(resnote)
                if(resnote.length==0){
                    try {
                        
                        const note = await Note.create(req.body);        
                        res.status(201).json({ msg:"success"})

                    } catch (error) {
                        res.status(400).json({ msg: "insert fild" });
                    }
                }else{
                    res.status(400).json({ msg: "Already exist" });
                }            

            }catch{
                res.status(400).json({ msg: false });
            }
            
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}