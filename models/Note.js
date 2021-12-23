const mongoose=require('mongoose');

const NoteSchema =new mongoose.Schema({
    // title:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     trim:true,
    //     maxlength:[40,'Title  cannot be more than 40'] 
    // },
    // description:{
    //     type:String,
    //     required:true,
    //     maxlength:[200,'Title  cannot be more than 200']
    // }

    user:[
            {
                name:String,
                cNumber:Number,
                pwd:String,
                nic:String,
                accessKey:String,
                lastSingin:Date.now,
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
                ]
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
                        status: Boolean,
                        amount:             
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