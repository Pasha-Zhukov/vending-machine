export function Product({ data }) {
  return (
    <>
      {data.map((item, index) =>
        item.remainder ? (
          <div key={`${index}kbdsvs`}>
            <div className="product">
              <div>Ячейка № {item.id}</div>
              {item.name}
              <div className="price">Цена {item.price}</div>
              <div className="price">Осталось {item.remainder} шт.</div>
            </div>
          </div>
        ) : (
          <div key={`${index}kghbdsvs`}>
            <div className="product">
              <div>Ячейка № {item.id}</div>
              <div>{`${item.name} Нет в наличии`}</div>
            </div>
          </div>
        )
      )}
    </>
  );
}
