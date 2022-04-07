DROP TABLE IF EXISTS colours;
DROP TABLE IF EXISTS shape;
DROP TABLE IF EXISTS variation;
DROP TABLE IF EXISTS product;

CREATE TABLE colour (
  colour_id SERIAL PRIMARY KEY, -- colour_id: 1
  colour_name TEXT NOT NULL, -- colour_name: Multi-colour
)

CREATE TABLE shape (
  shape_id SERIAL PRIMARY KEY, -- id: 1,
  shape_name TEXT NOT NULL, -- shape_name: Brick 1x1x1,
  shape_category TEXT NOT NULL, -- shape_category: brick,
  shape_x INT NOT NULL, -- shape_x: 1,
  shape_y INT NOT NULL, -- shape_y: 1,
  shape_z INT NOT NULL, -- shape_z: 1
)

CREATE TABLE variation (
  variation_id INT PRIMARY KEY, -- variation_id: 1
  fk_shape_id INT, -- fk_shape_id: 1
  fk_colour_id INT, -- fk_colour_id: 1
  FOREIGN KEY (fk_shape_id) REFERENCES shape (shape_id),
  FOREIGN KEY (fk_colour_id) REFERENCES colour (colour_id)
)

CREATE TABLE product (
  product_id SERIAL PRIMARY KEY, -- product_id: 1
  fk_variation_id, --fk_variation_id: 1
  stock INT, -- stock: 9765
  price DECIMAL, -- price: 0.02
  FOREIGN KEY (fk_variation_id) REFERENCES variation (variation_id)
)

CREATE TABLE customers (

)

CREATE TABLE filters (

)

CREATE TABLE orders (

)