import React from 'react';
import { Link } from 'react-router-dom';
function CartEmpty() {
  return (
    <div>
      <span>CartEmpty</span>
      <Link to="/catalog">
        <button>return</button>
      </Link>
    </div>
  );
}

export default CartEmpty;
