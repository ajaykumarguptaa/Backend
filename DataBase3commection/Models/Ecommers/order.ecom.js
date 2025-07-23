import mongoose from "mongoose";

const orderItems = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prduct",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // orderItem:[ // allso a correct format for defining a order schema
    // {
    //   productId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Prduct",
    // },
    // quantity: {
    //   type: Number,
    //   required: true,
    //  },
    // }
    //]

    ordeItem: [orderItems],
    address: {
      type:String,
      required:true,
    },
    // data modling  // selective thing  and spellings 
   status:{
    type:String,
    enums:['PENDING',"CANCELLED","DELIVERED"],
    default:"PENDING"
   }
    
  },

  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
