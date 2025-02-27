export const indexjs = `import "./styles.css";

import { display } from './helpers';
import { getProducts } from './get-products';

display(getProducts);
`;

export const getProductsjs = `import { placeholderData } from './helpers';
import { EPCC } from "./client";

// Let's create a new getProducts function that speaks to your 
// epcc store and get your products

// Replace the "placeholderData" promise with a call
// to the sdk \`EPCC.Catalog.Products.All()\`
export const getProducts = () => placeholderData;
`;

export const stylescss = `@font-face {
    font-family: OpenSans-Regular;
    src: url(OpenSans-Regular.ttf);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body,
  html {
    height: 100%;
    font-family: sans-serif;
  }
  a {
    margin: 0;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }
  a:focus {
    outline: none !important;
  }
  a:hover {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  ul,
  li {
    margin: 0;
    list-style-type: none;
  }
  input {
    display: block;
    outline: none;
    border: none !important;
  }
  textarea {
    display: block;
    outline: none;
  }
  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }
  button {
    outline: none !important;
    border: none;
    background: 0 0;
  }
  button:hover {
    cursor: pointer;
  }
  iframe {
    border: none !important;
  }
  .limiter {
    width: 100%;
    margin: 0 auto;
  }
  .container-table100 {
    width: 100%;
    min-height: 100vh;
    background: #c850c0;
    background: -webkit-linear-gradient(45deg, #4158d0, #c850c0);
    background: -o-linear-gradient(45deg, #4158d0, #c850c0);
    background: -moz-linear-gradient(45deg, #4158d0, #c850c0);
    background: linear-gradient(45deg, #4158d0, #c850c0);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 33px 30px;
  }
  .wrap-table100 {
    width: 1170px;
  }
  table {
    border-spacing: 1;
    border-collapse: collapse;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  table * {
    position: relative;
  }
  table td,
  table th {
    padding-left: 8px;
  }
  table thead tr {
    height: 60px;
    background: #36304a;
  }
  table tbody tr {
    height: 50px;
  }
  table tbody tr:last-child {
    border: 0;
  }
  table td,
  table th {
    text-align: left;
  }
  table td.l,
  table th.l {
    text-align: right;
  }
  table td.c,
  table th.c {
    text-align: center;
  }
  table td.r,
  table th.r {
    text-align: center;
  }
  .table100-head th {
    font-family: OpenSans-Regular;
    font-size: 18px;
    color: #fff;
    line-height: 1.2;
    font-weight: unset;
  }
  tbody tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  tbody tr {
    font-family: OpenSans-Regular;
    font-size: 15px;
    color: gray;
    line-height: 1.2;
    font-weight: unset;
  }
  tbody tr:hover {
    color: #555;
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .column1 {
    width: 260px;
    padding-left: 40px;
  }
  .column2 {
    width: 160px;
  }
  .column3 {
    width: 245px;
  }
  .column4 {
    width: 110px;
    text-align: right;
  }
  .column5 {
    width: 170px;
    text-align: right;
  }
  .column6 {
    width: 222px;
    text-align: right;
    padding-right: 62px;
  }
  @media screen and (max-width: 992px) {
    table {
      display: block;
    }
    table > *,
    table tr,
    table td,
    table th {
      display: block;
    }
    table thead {
      display: none;
    }
    table tbody tr {
      height: auto;
      padding: 37px 0;
    }
    table tbody tr td {
      padding-left: 40% !important;
      margin-bottom: 24px;
    }
    table tbody tr td:last-child {
      margin-bottom: 0;
    }
    table tbody tr td:before {
      font-family: OpenSans-Regular;
      font-size: 14px;
      color: #999;
      line-height: 1.2;
      font-weight: unset;
      position: absolute;
      width: 40%;
      left: 30px;
      top: 0;
    }
    table tbody tr td:nth-child(1):before {
      content: "Date";
    }
    table tbody tr td:nth-child(2):before {
      content: "Product ID";
    }
    table tbody tr td:nth-child(3):before {
      content: "Name";
    }
    table tbody tr td:nth-child(4):before {
      content: "Price";
    }
    table tbody tr td:nth-child(5):before {
      content: "Quantity";
    }
    table tbody tr td:nth-child(6):before {
      content: "Total";
    }
    .column4,
    .column5,
    .column6 {
      text-align: left;
    }
    .column4,
    .column5,
    .column6,
    .column1,
    .column2,
    .column3 {
      width: 100%;
    }
    tbody tr {
      font-size: 14px;
    }
  }
  @media (max-width: 576px) {
    .container-table100 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  `;

export const indexhtml = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Table V01</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
      <div class="limiter">
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table100">
              <table>
                <thead>
                  <tr class="table100-head">
                    <th class="column1">Name</th>
                    <th class="column2">Product ID</th>
                    <th class="column3">Price</th>
                    <th class="column4">Updated At</th>
                  </tr>
                </thead>
                <tbody id="table-body"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

export const helpersjs = `export function display(getProductFn) {
    getProductFn().then((resp) => {
    document.getElementById("table-body").innerHTML =
      resp.data.length > 0
        ? resp.data.map(displayProductCard)
        : \`<p style="text-align: center">Get the products from EPCC</p>\`;
  })};
  export function displayProductCard(product) {
    return \`<tr>
    <td class="column1">\${product.attributes.name}</td>
    <td class="column2">\${product.id}</td>
    <td class="column3">\${product.meta.display_price.without_tax.formatted}</td>
    <td class="column4">\${new Date(
      product.attributes.updated_at
    ).toLocaleString()}</td>
    </tr>\`;
  }
  
export const placeholderData = Promise.resolve({ data: [] });`;
