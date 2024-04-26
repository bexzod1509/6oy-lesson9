import React from "react";
import "./Admin.css";
import admin from "../../assets/admin.png";
function Admin() {
  return (
    <>
      <div className="login">
        <div className="containe">
          <div className="navsection">
            <h1>About Us</h1>
            <h1>Home - About Us</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="admin">
          <div className="i">
            <h1>Admin panel</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              recusandae necessitatibus quasi incidunt alias adipisci pariatur
              earum iure beatae assumenda rerum quod. Tempora magni autem a
              voluptatibus neque.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae
              rerum cum accusamus magni consequuntur architecto, ipsum deleniti
              expedita doloribus suscipit voluptatum eius perferendis amet!.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, maxime amet architecto est exercitationem optio ea
              maiores corporis beatae, dolores doloribus libero nesciunt qui
              illum? Voluptates deserunt adipisci voluptatem magni sunt sed
              blanditiis quod aspernatur! Iusto?
              <br />
              <br />
            </p>
            <div className="i1">
              <div>
                <h2>
                  0.1<b>k</b>
                </h2>
                <h3>Vendors</h3>
              </div>
              <div>
                <h2>
                  23<b>k</b>
                </h2>
                <h3>Customers</h3>
              </div>
              <div>
                <h2>
                  2<b>k</b>
                </h2>
                <h3>Products</h3>
              </div>
            </div>
          </div>
          <img src={admin} alt="" />
        </div>
        <div className="i2">
          <div>
            <h1>Product Packing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div>
            <h1>Product Packing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div>
            <h1>Product Packing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div>
            <h1>Product Packing</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
