SELECT
  *,
  CASE
    WHEN X + Y > Z
    AND Y + Z > X
    AND X + Z > Y THEN "Yes"
    ELSE "No"
  END AS triangle
FROM
  TRIANGLE;

SELECT
  *,
  IF (
    X + Y > Z
    AND Y + Z > X
    AND X + Z > Y,
    "Yes",
    "No"
  ) AS triangle
FROM
  TRIANGLE;