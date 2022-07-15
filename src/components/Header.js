import logo from "../logo.svg";

const Header = ( {order, setOrder} ) => {
  return (
    <header>
      <img src={logo} alt="logo" height={45} />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value={"short-first"}>Shortest songs first</option>
        <option value={"long-first"}>Longest songs firs</option>
      </select>
    </header>
  );
};

export default Header;
