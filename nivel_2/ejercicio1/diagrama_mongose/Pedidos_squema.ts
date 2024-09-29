import mongoose from "mongoose";

// Esquema de Clientes
const clientSchema = new mongoose.Schema({
  name: String,
  surname: String,
  address: {
    street: String,
    number: Number
  },
  postal_code: String,
  city: String,
  province: String,
  phone_number: String,
  orders_made: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

// Esquema de Pedidos
const orderSchema = new mongoose.Schema({
  order_time: { type: Date, required: true },
  order_type: { type: String, enum: ["Delivery", "Local"], required: true },
  order_details: [
    {
      product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  total_price: Number,
  additional_note: String,
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' },
  delivery_info: {
    delivered_by: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
    when_delivered: Date
  },
  order_status: { type: String, enum: ["Delivered", "On the way", "On preparation"] },
  order_payment: { type: String, enum: ["Paid", "Pending"] }
});

// Esquema de Productos
const productSchema = new mongoose.Schema({
  category: { type: String, enum: ["Pizza", "Hamburguer", "Drink"] },
  name: String,
  description: String,
  image: String,
  price: Number,
  pizza_categories: [String]
});

// Esquema de Tiendas
const shopSchema = new mongoose.Schema({
  address: {
    street: String,
    number: Number
  },
  postal_code: String,
  city: String,
  province: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

// Esquema de Empleados
const employeeSchema = new mongoose.Schema({
  name: String,
  surname: String,
  nif: String,
  phone_number: String,
  duty: { type: String, enum: ["Delivery", "Cook", "Counter"] },
  shop_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Shop' }
});

// Modelos
const Client = mongoose.model("Client", clientSchema);
const Order = mongoose.model("Order", orderSchema);
const Product = mongoose.model("Product", productSchema);
const Shop = mongoose.model("Shop", shopSchema);
const Employee = mongoose.model("Employee", employeeSchema);
