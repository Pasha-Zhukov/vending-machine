interface dataProducts {
  name: string;
  price: number;
  remainder: number;
  id: number;
}
export const Product = ({ data }: any) => {
  return (
    <>
      {data.map((item: dataProducts) =>
        item.remainder ? (
          <div key={item.id}>
            <div className="product">
              <div>Ячейка № {item.id}</div>
              {item.name}
              <div className="price">Цена {item.price}</div>
              <div className="price">Осталось {item.remainder} шт.</div>
            </div>
          </div>
        ) : (
          <div key={item.id}>
            <div className="product">
              <div>Ячейка № {item.id}</div>
              <div>{`${item.name} Нет в наличии`}</div>
            </div>
          </div>
        )
      )}
    </>
  );
};
