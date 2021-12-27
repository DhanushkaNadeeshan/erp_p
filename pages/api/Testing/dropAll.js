import dbConnect from '../../../utils/dbConnect';
import Note from '../../../models/Note';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'DELETE':
            try {
                const notes = await Note.deleteMany();

                res.status(200).json({ success: true, data: notes })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
            
        case 'POST':
            try {
                const note = await Note.create(req.body);

                res.status(201).json({ success: true, data: note })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}