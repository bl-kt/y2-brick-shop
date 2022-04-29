import * as auth from '../controllers/authController.mjs';

async function postCustomer(id){
    const currentCustomers = await getAllCustomers()
    console.log(currentCustomers)
    for (const customer of currentCustomers){
        if (id === customer.id){
            console.log('Already a customer');
            return;
        }
    }
    const response = await fetch(`/api/customer/${id}`, {method: 'POST'})
    return response;
};

async function getAllCustomers() {
    let response;
    try {
      response = await fetch('/api/customer/all');
    } catch (error) {
      console.error(error);
      return;
    }
    const data = await response.json();
    return data;
}

async function getCustomerByID(id) {
  let response;
    try {
      response = await fetch(`/api/customer/${id}`);
    } catch (error) {
      console.error(error);
      return;
    }
    const data = await response.json();
    return data;
}

export { postCustomer, getAllCustomers }
