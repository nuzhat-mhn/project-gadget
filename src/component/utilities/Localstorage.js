const getaddcardData = () => {
  const alldata = localStorage.getItem("addcard");
  if (alldata) {
    return JSON.parse(alldata);
  }
  return [];
};

const pushDataToLocalStorage = (data) => {
  const newdata = JSON.stringify(data);
  localStorage.setItem("addcard", newdata);
};
const setAddData = (product) => {
  const oldData = getaddcardData();
  oldData.push(product);
  pushDataToLocalStorage(oldData);
};

const deletedata = (id) => {
  const oldData = getaddcardData();
  const newData = oldData.filter((item) => item.product_id !== id);
  pushDataToLocalStorage(newData);
};

// for wishlist
const getwishlistData = () => {
  const alldata = localStorage.getItem("wishlist");
  if (alldata) {
    return JSON.parse(alldata);
  }
  return [];
};

const pushWishlistData = (data) => {
  const newdata = JSON.stringify(data);
  localStorage.setItem("wishlist", newdata);
};
const setWishlistData = (product) => {
  const oldData = getwishlistData();
  oldData.push(product);
  pushWishlistData(oldData);
};

const deletewishlistData = (id) => {
  const oldData = getwishlistData();
  const newData = oldData.filter((item) => item.product_id !== id);
  pushWishlistData(newData);
};

// clear the addcard localstorage data & wishlist local storage data
const clearAll = () => {
  localStorage.removeItem("addcard");
  localStorage.removeItem("wishlist");
};
export {
  getaddcardData,
  setAddData,
  deletedata,
  getwishlistData,
  setWishlistData,
  deletewishlistData,
  clearAll,
};
