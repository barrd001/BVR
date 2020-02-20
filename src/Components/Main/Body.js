import React from "react";
import Parallax2 from "./Parallax2";
import "./Main.css";

const Body = () => {
  return (
    <>
      <Parallax2 />
      <div className='body'>
        <h3>Food that Heals the Body</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias
          quo delectus similique quasi sapiente, mollitia rerum voluptas, earum
          ut nam necessitatibus vitae eaque excepturi nisi soluta? Ut officiis
          ipsum consequatur iure repellendus pariatur. Voluptas, iusto
          laboriosam? Perspiciatis, fuga rem! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis cum, modi veniam unde officiis
          quis sapiente, sit maxime nemo earum, omnis ad animi cumque aspernatur
          quia enim dicta. Sequi at similique repellat eos rerum iusto ratione
          aliquam quo totam. Labore!
        </p>
      </div>
      <Parallax2 />
    </>
  );
};

export default Body;
