SELECT
    score,
    DENSE_RANK() OVER (
        ORDER BY
            SCORE DESC
    ) AS "rank"
FROM
    SCORES;