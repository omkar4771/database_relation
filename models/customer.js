//ONE TO MANY
const mongoose = require("mongoose");
const {Schema } = mongoose;

main().then(()=>{
    console.log("connected sucessfully");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
};

const oerderSchema = new Schema({
    item : String,
    price : Number
});

const customerSchema = new Schema({
    name : String,
    orders :[
        {
            type : Schema.Types.ObjectId, ref :"order"
        },
    ],
});

const Order = mongoose.model("order", oerderSchema);
const customer = mongoose.model("Customer", customerSchema);

const addCustomer = async()=>{
    let cust1 = new Customer({
        name : "Rahul Kumar",
    })
}

// for add data 
// const addOrders = async ()=>{
//     let res = await Order.insertMany([
//         {item : "samosa", price : 15},
//         {item : "chips", price : 10},
//         {item : "chocolet", price : 50}
//     ]);
//     console.log(res);
// };
// addOrders();

