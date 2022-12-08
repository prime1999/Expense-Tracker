import { useState } from "react";

function Select({ select }) {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    select(e.target.value);
  };

  return (
    <>
      <ul className="rating">
        <li>
          <input
            type="radio"
            id="num1"
            name="rating"
            value="Car"
            onChange={handleChange}
            checked={selected === 1}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="num2"
            name="rating"
            value="Clothing/Fashion"
            onChange={handleChange}
            checked={selected === 2}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            id="num3"
            name="rating"
            value="Payment"
            onChange={handleChange}
            checked={selected === 3}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            type="radio"
            id="num4"
            name="rating"
            value="Service"
            onChange={handleChange}
            checked={selected === 4}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            type="radio"
            id="num5"
            name="rating"
            value="Tax"
            onChange={handleChange}
            checked={selected === 5}
          />
          <label htmlFor="num5">5</label>
        </li>
        <li>
          <input
            type="radio"
            id="num6"
            name="rating"
            value="Rent"
            onChange={handleChange}
            checked={selected === 6}
          />
          <label htmlFor="num6">6</label>
        </li>
        <li>
          <input
            type="radio"
            id="num7"
            name="Internet bills"
            value="7"
            onChange={handleChange}
            checked={selected === 7}
          />
          <label htmlFor="num7">7</label>
        </li>
        <li>
          <input
            type="radio"
            id="num8"
            name="rating"
            value="Transportation"
            onChange={handleChange}
            checked={selected === 8}
          />
          <label htmlFor="num8">8</label>
        </li>
        <li>
          <input
            type="radio"
            id="num9"
            name="rating"
            value="Miscelleneous"
            onChange={handleChange}
            checked={selected === 9}
          />
          <label htmlFor="num9">9</label>
        </li>
        <li>
          <input
            type="radio"
            id="num10"
            name="rating"
            value="Other"
            onChange={handleChange}
            checked={selected === 10}
          />
          <label htmlFor="num10">10</label>
        </li>
      </ul>
    </>
  );
}

export default Select;
