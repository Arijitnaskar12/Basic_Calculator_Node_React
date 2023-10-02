const express=require("express");
const app=express();
// cross origin resource sharing
const cors=require("cors");
const PORT=8001;
// middleware
app.use(express.json());
app.use(cors());
// testing call
app.get("/testing",(req,res)=>{
    res.send("This is testing,its Working yayy!");
    
})
// adding call through body
app.post("/add",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    const sum=num1+num2;
    res.send(`The Sum is: ${sum}`);
})
// substract call through params
app.get("/substract/:num1/:num2",(req,res)=>{
    const num1=Number(req.params.num1);
    const num2=Number(req.params.num2);
    const Difference=num1-num2;
    res.send(`The Difference is: ${Difference}`);
})
// multiply call throgh QUERY
app.get("/multiply",(req,res)=>{
    const num1=Number(req.query.num1);
    const num2=Number(req.query.num2);
    const product=num1*num2;
    res.send(`The Product is: ${product}`);
})
// divide call through body
app.post("/divide",(req,res)=>{
    const num1=req.body.num1;
    const num2=req.body.num2;
    if(num2===0)
    {
        res.status(400).send('Please Enter a number greater than 0')
    }
    const product=num1/num2;
    res.status(200).send(`The Product is: ${product}`);
})
app.listen(PORT,()=>{
console.log("Server is running at port",PORT);
})