const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const atendent = order.order.delivery.deliveryPerson;
  const client = order.name;
  const tel = order.phoneNumber;
  const andress = `${order.address.street}, N°:${order.address.number},AP: ${order.address.apartment}.`;
  return `Olá ${atendent}, entrega para: ${client}, Telefone: ${tel}, ${andress}`;
};

// console.log(customerInfo(order));

const orderModifier = (order) => {
  order = {...order, name: 'Luiz Silva', payment: {total: 50}}
  const client = order.name;
  const amount = order.payment.total
  return `Olá ${client}, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ ${amount},00`
};

console.log(orderModifier(order));
