const express=require("express");
const route=express.Router();
const empControler=require("../Controlers/empController")

route.get("/",empControler.empHome);
route.get("/insert",empControler.empInsert);
route.get("/display",empControler.empDisplay);
route.get("/edit",empControler.empEdit);
route.post("/DataSave", empControler.DataSave);
route.get("/RecDelete", empControler.DeletData)

module.exports=route;