DELETE FROM Person P1
WHERE
  P1.id NOT IN (
    SELECT
      *
    FROM
      (
        SELECT
          min(id)
        FROM
          Person P2
        GROUP BY
          P2.email
      ) AS ST
  );