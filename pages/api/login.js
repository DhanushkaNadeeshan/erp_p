import dbConnect from '../../utils/dbConnect';
import Note from '../../models/Note';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {  
        case 'POST':
            var nownic=req.body.nic;
            var nowpwd=req.body.pwd;
            try{
                const resnote = await Note.find({
                    nic:nownic,
                    pwd:nowpwd
                });
                
                if(resnote.length==1){

                }else{
                    res.status(400).json({ msg: "useer not avilable" });
                }

            }catch{
                res.status(400).json({ msg: false });
            }
            
            break;
        default:
            res.status(400).json({ msg: false });
            break;
    }
}