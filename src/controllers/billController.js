import Bill from "../models/bill-model.js"






export const  getAllBills =async function(req,res,next){
    
    // try {
    //   const { userId } = req.params;
    //   const bills = await Bill.find({ user: userId })//.populate('reminders');
    //   res.json(bills);
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ error: 'Server error' });
    // }
  
try{
    const {userId} = req.body
    // const userId = req.params; 

  const bills = await Bill.find({ user: userId })
  res.json({ bills });
}catch(error){

res.status(500).json({ error: 'Server error' });
}

}



export const  getBill = async function (req,res,next){
    try{
        const {id} = req.params

        const billFound = await Bill.findById(id)
    if (!billFound) {
     return res.status(404).json({ error: 'Bill not found' });
    } 
    res.status(200).json({
     success : true,
    data : billFound
       
    })


    }catch(error){
    console.error(error);
    res.status(500).json({ error: 'Server error' });      
    }


} ;


export const createBill = async function(req,res,next){
    try {
        const { amount, type, dueDate, userId } = req.body;
        
        // if (error) {
        //   return res.status(400).json({ error: error.details[0].message });
        // }
        const bill = await Bill.create({
          amount,
          type,
          dueDate,
          user: userId,
        });
        console.log("hhgsgsgsg")
        res.status(201).json(bill);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
    }



    export const updateBill = async function (req,res,next){

        try{const { id } = req.params;
        const { amount, type, dueDate } = req.body;
        const updatedBill = await Bill.findByIdAndUpdate(
          id,
          { amount, type, dueDate },
          { new: true }
        );
        if (!updatedBill) {
          return res.status(404).json({ error: 'Bill not found' });
        }
        res.json(updatedBill);
        
        
        }catch(error){
        console.error(error);
        res.status(500).json({ error: 'Server error' });    
        }
        }

        

        export const deleteBill = async function(req,res,next){
            try {
                const { id } = req.params;
                const deletedBill = await Bill.findByIdAndDelete(id);
                if (!deletedBill) {
                  return res.status(404).json({ error: 'Bill not found' });
                }
                res.json({ success: true });
              } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'Server error' });
              }
        }