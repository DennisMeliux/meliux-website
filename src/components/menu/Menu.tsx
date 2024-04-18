const Menu = ({ menuItems }: { menuItems: { name: string; id: string }[] }) => {
  return (
    <nav>
      <ul className="flex gap-5">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className="text-white text-opacity-50 text-sm font-semibold uppercase leading-tight tracking-wide"
          >
            <a href={`#${item.id}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
