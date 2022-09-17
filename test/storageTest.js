const Storage = artifacts.require("Storage");

contract("Storage",()=>{
   before(async()=>{
     storage = await Storage.deployed();
    });
   it("should return the item",async ()=>{
    
      await storage.set("Good Morning");
      //const storage = await Storage.deployed(); // bc it is deploy inside the before 
      const result = await storage.get();
      assert (result === "Good Morning");
   });
   it("should return Hello",async ()=>{
    
      await storage.set("Hello");
     // const storage = await Storage.deployed();
      const result = await storage.get();
      assert (result === "Hello");
   });
});