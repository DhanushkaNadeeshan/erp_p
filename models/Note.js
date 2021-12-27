const mongoose=require('mongoose');

const NoteSchema =new mongoose.Schema({
   
    name:String,
    cNumber:Number,
    pwd:String,
    nic:String,
    accessKey:String,
    lastSingin:Date,
    rates: [
        {
            matrix:String,
            name:String             
        }
    ],
    position: [
        {
            name:String            
        }
    ],

    employee:[
             {
                 name:String,
                 cnumb:Number,
                 bank:String,
                 accountNo:Number,
                 branch:String,
                 joinDate:Date,
                 position:String,
                 note:String

             }
     ],
    attendens:[
             {
                 name:String,
                 uid:String,
                 rate:Number,
                 date:Date,
                 tax:Number,
                 bonus:Number,
                 work:String,
                 location:String
             }
     ],
    project:[
             {
                 name:String ,
                 uid: String,
                 location: String,
                 owner: String,
                 startdate: Date,
                 enddate: Date,
                 partners: String,
                 net:Number,
                 lend:Number,
                 status:String,
                 income: [
                     {
                         name:String ,
                         date: Date,
                         status: Number,
                         amount: Number            
                     }
                 ],
                 rates: [
                     {
                         matrix: String,
                         val: Number,
                         name: String            
                     }
                 ]
             }
     ]

})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);