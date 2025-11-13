SELECT
  D.name AS Department,
  E2.name AS Employee,
  E1.salary AS Salary
FROM
  (
    Select
      MAX(salary) AS salary,
      departmentId
    FROM
      Employee
    GROUP BY
      departmentId
  ) AS E1
  JOIN Department D
  JOIN Employee AS E2 ON E1.departmentId = D.id
  AND E1.departmentId = E2.departmentId
WHERE
  E1.salary = E2.salary;

SELECT
  D.NAME AS Department,
  E.NAME AS Employee,
  E.SALARY AS Salary
FROM
  DEPARTMENT D
  LEFT JOIN EMPLOYEE E ON E.DEPARTMENTID = D.ID
WHERE
  E.SALARY = (
    SELECT
      MAX(SALARY)
    FROM
      EMPLOYEE
    WHERE
      DEPARTMENTID = E.DEPARTMENTID
  );