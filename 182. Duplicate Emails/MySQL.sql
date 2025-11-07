SELECT
  Email
FROM
  Person
GROUP BY
  email
HAVING
  COUNT(Email) > 1;