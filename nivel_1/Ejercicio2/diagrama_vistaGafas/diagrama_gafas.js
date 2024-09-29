db.createCollection('Ulleres', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Ulleres',
      required: ['brand', 'frame', 'price', 'provider'],
      properties: {
        brand: {
          bsonType: 'string'
        },
        frame: {
          bsonType: 'string'
        },
        price: {
          bsonType: 'double'
        },
        provider: {
          bsonType: 'object',
          title: 'object',
          required: ['name', 'address', 'phone_number', 'nif'],
          properties: {
            name: {
              bsonType: 'string'
            },
            address: {
              bsonType: 'object',
              title: 'object',
              required: ['street', 'city', 'postal_code', 'country'],
              properties: {
                street: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                postal_code: {
                  bsonType: 'string'
                },
                country: {
                  bsonType: 'string'
                }
              }
            },
            phone_number: {
              bsonType: 'string'
            },
            nif: {
              bsonType: 'string'
            }
          }
        },
        bought_by: {
          bsonType: 'object',
          title: 'object',
          required: ['name', 'address', 'email', 'phone_number', 'seller'],
          properties: {
            name: {
              bsonType: 'string'
            },
            address: {
              bsonType: 'object',
              title: 'object',
              required: ['street', 'city', 'postal_code', 'country'],
              properties: {
                street: {
                  bsonType: 'string'
                },
                city: {
                  bsonType: 'string'
                },
                postal_code: {
                  bsonType: 'string'
                },
                country: {
                  bsonType: 'string'
                }
              }
            },
            email: {
              bsonType: 'string'
            },
            phone_number: {
              bsonType: 'string'
            },
            seller: {
              bsonType: 'object',
              title: 'object',
              required: ['name', 'store', 'date'],
              properties: {
                name: {
                  bsonType: 'string'
                },
                store: {
                  bsonType: 'string'
                },
                date: {
                  bsonType: 'date'
                },
                nif_employed: {
                  bsonType: 'string'
                }
              }
            }
          }
        }
      }
    }
  }
});
