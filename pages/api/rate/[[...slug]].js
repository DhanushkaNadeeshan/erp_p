import dbConnect from '../../utils/dbConnect';
import Note from '../../models/Note';

dbConnect();

export default async (req, res) => {
    const { slug } = req.query
    // ########################################################
    if(slug){
        const {
            query: { id },
            method
        } = req;
    
        switch (method) {
            case 'GET':
                try {
                    const note = await Note.findById(id);
    
                    if (!note) {
                        return res.status(400).json({ msg: "data not found" });
                    }
    
                    res.status(200).json({
                        "name":note.name,
                        "cNumber":note.cNumber,
                        "pwd":note.pwd,
                        "nic":note.nic,
                        "lastSingin":note.lastlastSingin
                    });
                } catch (error) {
                    res.status(400).json({ msg: "attampt failed" });
                }
                break;
            case 'PUT':
                try {
                    const note = await Note.findByIdAndUpdate(id, req.body, {
                        new: true,
                        runValidators: true
                    });
    
                    if (!note) {
                        return res.status(400).json({ msg: "attamptt faild" });
                    }
    
                    res.status(200).json({ 
                        msg: "success", 
                        id: note.id,
                        name:note.name,
                        cNumber:note.cNumber,
                        pwd:note.pwd,
                        nic:note.nic
                    });
                } catch (error) {
                    res.status(400).json({ msg: false });
                }
                break;
            default:
                res.status(400).json({ success: false })
                break;
        }
    //###################################################################### 
    }else{
        const {
            query: { id },
            method
        } = req;

        switch (method) {
            case 'GET':
                try {
                    const note = await Note.find();

                    if (!note) {
                        return res.status(400).json({ msg: "attmpt faild" });
                    }

                    const result= await setRatelist(note);

                    res.status(200).json({ msg: "success", data: result });
                } catch (error) {
                    res.status(400).json({ msg: false });
                }
                break;
            case 'POST':
                try {
                    const note = await Note.findByIdAndUpdate(id, req.body, {
                        new: true,
                        runValidators: true
                    });

                    if (!note) {
                        return res.status(400).json({ msg: false });
                    }

                    res.status(200).json({ msg: true, data: note });
                } catch (error) {
                    res.status(400).json({ msg: false });
                }
                break;
            default:
                res.status(400).json({ msg: false })
                break;
        }
    }
    // ######################################################################
}

function setRatelist(note){
    let dataList = [];
    for (let x in note) {
        let singleData=note.rates;
        dataList.push(singleData);
      }
    return dataList;  
}