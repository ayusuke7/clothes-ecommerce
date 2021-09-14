//const Category = require("../models/category");
const MercadoPago = require("mercadopago");

const getFullUrl = (req) => {
  const url = req.protocol + "://" + req.get("host");
  console.log(url);
  return url;
};

const paymentController = {
  async checkout(req, res) {
    MercadoPago.configure({
      sandbox: true,
      access_token: process.env.MP_ACCESS_TOKEN,
    });

    //Create purchase item object template
    const purchaseOrder = {
      items: [
        {
          id: 1,
          title: "teste de checkout",
          description: "teste de checkout",
          quantity: 1,
          currency_id: "BRL",
          unit_price: parseFloat(49.9),
        },
      ],
      payer: {
        email: "kanajil875@stvbz.com",
      },
      auto_return: "all",
      external_reference: "1",
      back_urls: {
        success: getFullUrl(req) + "/payments/success",
        pending: getFullUrl(req) + "/payments/pending",
        failure: getFullUrl(req) + "/payments/failure",
      },
    };

    try {
      const preference = await MercadoPago.preferences.create(purchaseOrder);
      return res.redirect(`${preference.body.init_point}`);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = paymentController;
