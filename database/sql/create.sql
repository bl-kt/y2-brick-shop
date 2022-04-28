DROP TABLE IF EXISTS colours;
DROP TABLE IF EXISTS shape;
DROP TABLE IF EXISTS brick;
DROP TABLE IF EXISTS kits;

-- Populated
CREATE TABLE colour (
  id SERIAL PRIMARY KEY,
  colour_name TEXT,
  colour_hex TEXT
);

-- Populated
CREATE TABLE shape (
  id SERIAL PRIMARY KEY, -- id: 1,
  shape_name TEXT NOT NULL, -- shape_name: Brick 1x1x1,
  shape_cat VARCHAR(10) NOT NULL, -- shape_category: brick,
  shape_x INT NOT NULL, -- shape_x: 1,
  shape_y INT NOT NULL, -- shape_y: 1,
  shape_z INT NOT NULL, -- shape_z: 1
  shape_mod TEXT
);

-- Populatated
CREATE TABLE brick (
  id SERIAL PRIMARY KEY,
  fk_shape_id   INT NOT NULL, -- fk_shape_id: 1
  fk_colour_id INT NOT NULL, -- fk_colour_id:
  stock INT, -- stock: 9765
  price DECIMAL, -- price: 0.02
  FOREIGN KEY (fk_shape_id) REFERENCES shape (id),
  FOREIGN KEY (fk_colour_id) REFERENCES colour (id)
);

-- Populated
CREATE TABLE kit (
  id SERIAL PRIMARY KEY,
  kit_name TEXT,
  kit_cat TEXT,
  kit_bricks JSON,
  kit_pieces INT, -- uses brick_id
  kit_stock INT,
  kit_price DECIMAL
);

CREATE TABLE customers (

)

CREATE TABLE filters (

)

CREATE TABLE orders (

)