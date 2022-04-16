--All Bricks
SELECT * FROM brick

-- Bricks for Cataloguing
SELECT b.id, b.price, b.stock,  s.shape_name
FROM brick AS b
JOIN shape AS s ON b.fk_shape_id = s.id;

-- DISTINCT, Bricks for Cataloguing
SELECT DISTINCT on(s.shape_name)
s.shape_name AS "name",
b.price AS "price",
b.stock AS "stock",
b.id AS "id"
FROM brick AS b
JOIN shape AS s ON b.fk_shape_id = s.id;

-- Brick by ID
SELECT * FROM brick where id ="

-- Stock of Brick by ID
SELECT stock FROM brick WHERE id="

--All Kits
SELECT * FROM kit

-- All Products
SELECT * FROM product