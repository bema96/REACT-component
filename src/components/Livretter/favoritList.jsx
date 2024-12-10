// FavoriteList.jsx
export const FavoritList = ({ items, title }) => {
    return (
      <div>
        <h2>{title}</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  