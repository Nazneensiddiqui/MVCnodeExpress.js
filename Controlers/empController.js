const empModel=require("../Models/empModel")

const empHome = (req, res) => {
    res.render("Home")
}

const empInsert = (req, res) => {
    res.render("Insert")
}

const empDisplay = async(req, res) => {
  const mydata= await empModel.find()
 res.render("Display" , {data:mydata})
}


const empEdit = async(req, res) => {
    const mydata= await empModel.find()
    res.render("Edit", {data:mydata})
}

const DataSave=(req,res)=>{
  const {eno, nm, ct, sal}=req.body;
 empModel.create({
    empno:eno,
    name:nm,
    city:ct,
    salary:sal
  })
 res.render("Insert")
}

const DeletData=async(req,res)=>{
    const myid=req.query.id;
    await empModel.findByIdAndDelete(myid);
    const mydata= await empModel.find()
     res.render("Edit", {data:mydata})
}



module.exports={
    empHome,
    empInsert,
    empDisplay,
    empEdit,
    DataSave,
    DeletData
}