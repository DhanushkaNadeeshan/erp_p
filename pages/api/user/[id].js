import dbConnect from '../../utils/dbConnect';
import Note from '../../models/Note';

dbConnect();

export default async (req, res) => {
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
}