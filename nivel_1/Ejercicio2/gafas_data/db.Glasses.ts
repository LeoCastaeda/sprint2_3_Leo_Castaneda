db.Glasses.insertOne({
  brand: "Gucci",
  frame: "Square",
  price: NumberDecimal("450.99"),
  provider: {
    name: "Luxury Optics SL",
    address: {
      street: "Calle de la Moda, 45",
      city: "Madrid",
      postal_code: "28012",
      country: "España"
    },
    phone_number: "+34 910 123 456",
    nif: "B12345678"
  },
  bought_by: {
    name: "José Martín",
    address: {
      street: "Avenida de las Letras, 12",
      city: "Madrid",
      postal_code: "28014",
      country: "España"
    },
    email: "jose.martin@example.com",
    phone_number: "+34 600 111 222",
    seller: {
      name: "Laura Ramírez",
      store: "Luxury Optics Madrid",
      date: ISODate("2024-09-27T10:00:00Z"),
      nif_employed: "B87654321"
    }
  }
});

db.Glasses.insertOne({
  brand: "Prada",
  frame: "Cat Eye",
  price: NumberDecimal("525.75"),
  provider: {
    name: "Vision Deluxe",
    address: {
      street: "Calle del Lujo, 30",
      city: "Barcelona",
      postal_code: "08002",
      country: "España"
    },
    phone_number: "+34 933 555 123",
    nif: "B11223344"
  },
  bought_by: {
    name: "Marta Fernández",
    address: {
      street: "Paseo de Gracia, 15",
      city: "Barcelona",
      postal_code: "08007",
      country: "España"
    },
    email: "marta.fernandez@example.com",
    phone_number: "+34 600 333 444",
    seller: {
      name: "Carlos López",
      store: "Vision Deluxe Barcelona",
      date: ISODate("2024-09-27T11:00:00Z"),
      nif_employed: "B99887766"
    }
  }
});

db.Glasses.insertOne({
  brand: "Dior",
  frame: "Aviator",
  price: NumberDecimal("680.50"),
  provider: {
    name: "Optica Elegance",
    address: {
      street: "Avenida de la Reina, 22",
      city: "Valencia",
      postal_code: "46002",
      country: "España"
    },
    phone_number: "+34 961 444 789",
    nif: "B55667788"
  },
  bought_by: {
    name: "Luis Gómez",
    address: {
      street: "Calle del Mar, 8",
      city: "Valencia",
      postal_code: "46001",
      country: "España"
    },
    email: "luis.gomez@example.com",
    phone_number: "+34 600 555 666",
    seller: {
      name: "Ana Pérez",
      store: "Optica Elegance Valencia",
      date: ISODate("2024-09-27T12:00:00Z"),
      nif_employed: "B33445566"
    }
  }
});
