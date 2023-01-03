import mongoose from 'mongoose';
import { stringify } from 'uuid';


const productSchema = new mongoose.Schema({
    id: 
    {
        type:String,
        required:true,
        unique:true

    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});


const Products = mongoose.model('product', productSchema);

export default Products;