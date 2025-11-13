WITH
  SALARY_TABLE AS (
    SELECT
      D.Name AS Department,
      E.Name AS Employee,
      E.Salary,
      dense_rank() OVER (
        PARTITION BY
          D.Name
        ORDER BY
          E.Salary DESC
      ) AS SALARY_RANK
    FROM
      Employee E
      INNER JOIN Department D ON E.DepartmentId = D.Id
  )
SELECT
  Department,
  Employee,
  Salary
FROM
  SALARY_TABLE
WHERE
  SALARY_RANK <= 3;