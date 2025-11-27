SELECT
  REQUEST_AT AS Day,
  ROUND(
    SUM(
      CASE
        WHEN STATUS = 'cancelled_by_driver'
        OR STATUS = 'cancelled_by_client' THEN 1
        ELSE 0
      END
    ) / COUNT(REQUEST_AT),
    2
  ) AS "Cancellation Rate"
FROM
  Trips T
  JOIN USERS C ON T.client_id = C.users_id
  AND C.banned = 'No'
  JOIN USERS U ON T.driver_id = U.users_id
  AND U.banned = 'No'
WHERE
  REQUEST_AT BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY
  REQUEST_AT
ORDER BY
  REQUEST_AT ASC;