import React from 'react'
import "./Have.css"

const Have = () => {
  return (
    <div>
      <div className="store">
        <h4>MEET THE FAMILY</h4>
        <h1>What we have in store for you.</h1>
        <p>
          Morbi neque ex, condimentum dapibus congue et, vulputate ut <br />{" "}
          ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi{" "}
          <br /> ultrices, ut faucibus orci tincidunt.
        </p>
        <div className="boxes">
          <div className="boxx1">
            <h1>Accessories</h1>
            <p>
              Accessories you didn't know <br /> you needed.
            </p>
            <span>View Accessories</span>
          </div>
          <div className="boxx2">
            <h1>Apparel</h1>
            <p>
              Check out our line of non- <br />
              hiking clothes.
            </p>
            <span>View Apparel</span>
          </div>
          <div className="boxx3">
            <h1>Climbing Gear</h1>
            <p>Climbing gear for every occasion.</p>
            <span>View Climbing Gear</span>
          </div>
          <div className="boxx4">
            <h1>Headwear</h1>
            <p>
              Our beanies are so comfy you <br /> won't believe it.
            </p>
            <span>View Headwear</span>
          </div>
          <div className="boxx5">
            <h1>Hiking Gear</h1>
            <p>Desert or mountain? Doesn't matter.</p>
            <span>View Hiking Gear</span>
          </div>
          <div className="boxx6">
            <h1>Jackets</h1>
            <p>
              Our jackets are perfect for every <br /> season.
            </p>
            <span>View Jackets</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Have
