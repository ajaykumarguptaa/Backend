const asynchandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };

};

export { asynchandler };

//asynchandler  a special higher orderfunction
// const asynchandler=()=>{};
// const asynchandler=(func)=>{()=>{}};
// const asynchandler-()=>()=>{};
// const asynchandler=(func)=>async ()=>{};



// const asynchandler = (fn) =>async (req,res,next)=>{
//   try{
//    await fn(req,res,next)
//   }catch(error){
//     res.status(err.code || 500).json({
//       success:false,
//       message:err.message
//     })
//   }
// };
