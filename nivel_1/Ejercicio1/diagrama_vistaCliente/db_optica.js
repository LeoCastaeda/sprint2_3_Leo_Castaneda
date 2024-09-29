db.createCollection('Clients', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Clients',
        required: ['name', 'address', 'telephone', 'email', 'register_date'],
        properties: {
          name: {
            bsonType: 'string'
          },
          address: {
            bsonType: 'object',
            title: 'object',
            required: ['street', 'number', 'city', 'postal_code', 'country'],
            properties: {
              street: {
                bsonType: 'string'
              },
              number: {
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
          telephone: {
            bsonType: 'string'
          },
          email: {
            bsonType: 'string'
          },
          register_date: {
            bsonType: 'date'
          },
          recommended: {
            bsonType: 'string'
          },
          last_shopping: {
            bsonType: 'object',
            title: 'object',
            required: ['brand', 'lens_graduation', 'frame_type', 'price'],
            properties: {
              brand: {
                bsonType: 'string'
              },
              lens_graduation: {
                bsonType: 'object',
                title: 'object',
                required: ['left', 'right'],
                properties: {
                  left: {
                    bsonType: 'decimal'
                  },
                  right: {
                    bsonType: 'decimal'
                  }
                }
              },
              lens_color: {
                bsonType: 'object',
                title: 'object',
                required: ['left', 'right'],
                properties: {
                  left: {
                    bsonType: 'string'
                  },
                  right: {
                    bsonType: 'string'
                  }
                }
              },
              frame_type: {
                bsonType: 'string'
              },
              price: {
                bsonType: 'decimal'
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
                    properties: {
                      street: {
                        bsonType: 'string'
                      },
                      number: {
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
              }
            }
          }
        }
      }
    }
  });
  