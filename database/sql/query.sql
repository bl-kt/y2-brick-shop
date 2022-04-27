-- Bricks
SELECT DISTINCT on(s.shape_name)
    b.id AS "id",
    s.shape_name AS "name",
    s.id AS "img_id",
    s.shape_cat AS "shape_cat",
    b.price AS "price",
    b.stock AS "stock",
    b.id AS "id"
    FROM brick AS b
    JOIN shape AS s ON b.fk_shape_id = s.id;

SELECT * FROM (
      SELECT DISTINCT on(s.shape_name)
        b.id AS "id",
        s.shape_name AS "name",
        s.id AS "img_id",
        s.shape_cat AS "shape_cat",
        b.price AS "price",
        b.stock AS "stock",
        b.id AS "id"
        FROM brick AS b
        JOIN shape AS s ON b.fk_shape_id = s.id
    ORDER BY s.shape_name ASC
    ) AS "table";

-- Kits
SELECT
  k.id as "id",
  k.kit_name as "name",
  k.id as "img_id",
  k.kit_cat as "cat",
  k.kit_stock as "stock",
  k.kit_price as "price"
  FROM kit as k

-- Products
(SELECT DISTINCT ON (s.shape_name)
    b.id as "id",
    s.shape_name as "name",
    s.id as "img_id",
    s.shape_cat as "cat",
    stock as "stock",
    price as "price"
    FROM brick as b
   JOIN shape as s on b.fk_shape_id = s.id
   ) UNION (
    SELECT
    id as "id",
    kit_name as "name",
    id as "img_id",
    kit_cat as "cat",
    kit_stock as "stock",
    kit_price as "price"
    from kit);

SELECT * FROM (
      (SELECT DISTINCT ON (s.shape_name)
       b.id as "id",
       s.shape_name as "name",
       s.id as "img_id",
       s.shape_cat as "cat",
       stock as "stock",
       price as "price"
       FROM brick as b
       JOIN shape as s on b.fk_shape_id = s.id
      ) UNION (
       SELECT
       id as "id",
       kit_name as "name",
       id as "img_id",
       kit_cat as "cat",
       kit_stock as "stock",
       kit_price as "price"
       from kit)) as "table"

-- SEARCH ALL
SELECT * FROM (
      (SELECT DISTINCT ON (s.shape_name)
       b.id as "id",
       s.shape_name as "name",
       s.id as "img_id",
       s.shape_cat as "cat",
       stock as "stock",
       price as "price"
       FROM brick as b
       JOIN shape as s on b.fk_shape_id = s.id
      ) UNION (
        SELECT
        k.id as "id",
        k.kit_name as "name",
        k.id as "img_id",
        k.kit_cat as "cat",
        k.kit_stock as "stock",
        k.kit_price as "price"
        from kit as k)) as "table" where position('arch'  in  lower(name))>0;

-- Better search
SELECT * FROM (
      (SELECT DISTINCT ON (s.shape_name)
       b.id as "id",
       s.shape_name as "name",
       s.id as "img_id",
       s.shape_cat as "cat",
       stock as "stock",
       price as "price"
       FROM brick as b
       JOIN shape as s on b.fk_shape_id = s.id
      ) UNION (
        SELECT
        k.id as "id",
        k.kit_name as "name",
        k.id as "img_id",
        k.kit_cat as "cat",
        k.kit_stock as "stock",
        k.kit_price as "price"
        from kit as k)) as "table"
WHERE name ILIKE '%arch%';

-- Filter
SELECT * FROM (
      (SELECT DISTINCT ON (s.shape_name)
       b.id as "id",
       s.shape_name as "name",
       s.id as "img_id",
       s.shape_cat as "cat",
       stock as "stock",
       price as "price"
       FROM brick as b
       JOIN shape as s on b.fk_shape_id = s.id
      ) UNION (
        SELECT
        k.id as "id",
        k.kit_name as "name",
        k.id as "img_id",
        k.kit_cat as "cat",
        k.kit_stock as "stock",
        k.kit_price as "price"
        from kit as k)) as "table"
WHERE lower(cat) = 'arch';