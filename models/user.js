const mongoose = require("mongoose");
const {Schema} =  mongoose;
main().then(()=>{
    console.log("connection sucessfull..!");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");   
}

const userSchema = new Schema({
    username : String,
    addresses : [
        {
            _id : false,
            location : String,
            city : String,
        },
    ],
});

const user = mongoose.model("User",userSchema);

const addUser =  async ()=>{
    let user1 = new user({
        username : "omkar",
        addresses : [{
            location : "balaji nagar",
            city : "pune"
        }]
    });

    user1.addresses.push({
        location :"delhi",
        city : "india",
    });
   let result =  await user1.save();
   console.log(result);
};
addUser();