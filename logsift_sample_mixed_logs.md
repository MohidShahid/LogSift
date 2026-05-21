# sample.log

```log
2024-03-15T14:23:01Z 192.168.1.42 GET /api/users 200 142ms
2024-03-15T14:23:02Z 10.0.0.7 POST /api/login 401 89ms
2024-03-15T14:23:03Z 172.16.0.12 GET /api/products 200 512ms
  2024-03-15T14:23:04Z 192.168.1.42 GET /api/users/12 200 53ms
2024/03/15 14:23:05 192.168.1.77 PUT /api/users/12 204 0.231s
15-Mar-2024 14:23:06 10.10.10.10 DELETE /api/orders/5 500 1200ms
1710512581 172.20.1.8 GET /api/dashboard 200 88
2024-03-15T14:23:08Z 192.168.1.20 POST /api/payment 503 2.1s
2024-03-15T14:23:09Z 192.168.1.21 GET /health 200 4ms
2024-03-15T14:23:10Z 192.168.1.22 GET /api/users - 51ms
2024-03-15T14:23:11Z 192.168.1.23 PATCH /api/users/7 200 170ms
2024-03-15T14:23:12Z 192.168.1.24 GET /api/reports 504 5.2s
2024-03-15T14:23:13Z 192.168.1.25 POST /api/upload 201 990ms
2024-03-15T14:23:14Z 192.168.1.26 GET /api/users?page=2 200 76ms
2024-03-15T14:23:15Z 192.168.1.27 GET /api/search?q=nodejs 200 340ms
2024-03-15T14:23:16Z 192.168.1.28 POST /api/login 429 65ms
2024-03-15T14:23:17Z 192.168.1.29 GET /api/stats 200 0.091s
2024-03-15T14:23:18Z 192.168.1.30 OPTIONS /api/users 204 3ms
2024-03-15T14:23:19Z 192.168.1.31 GET /api/export 500 9.4s

{"timestamp":"2024-03-15T14:23:20Z","ip":"10.1.1.1","method":"GET","path":"/api/json","status":200,"responseTime":"77ms"}
{"timestamp":"2024-03-15T14:23:21Z","ip":"10.1.1.2","method":"POST","path":"/api/orders","status":201,"responseTime":"312ms"}
{"timestamp":"2024-03-15T14:23:22Z","ip":"10.1.1.3","method":"GET","path":"/api/broken","status":500,"responseTime":"4.2s"}

2024-03-15T14:23:23Z 192.168.1.40 GET /api/users 200 123ms "Mozilla/5.0"
2024-03-15T14:23:24Z 192.168.1.41 POST /api/login 401 97ms "Mozilla/5.0" "https://example.com/login"
2024-03-15T14:23:25Z 192.168.1.42 GET /api/orders 200 203ms "curl/7.88"

MALFORMED LINE WITHOUT STRUCTURE
2024-03-15T14:23:27Z only-half-written
NULL NULL NULL

Error: Database connection lost
    at connect (/app/db.js:42:11)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)

2024-03-15T14:23:28Z 192.168.1.50 GET /api/recovery 200 45ms
2024-03-15T14:23:29Z 192.168.1.51 POST /api/upload 413 1.2s
2024-03-15T14:23:30Z 192.168.1.52 GET /api/metrics 200 22ms
2024-03-15T14:23:31Z 192.168.1.53 GET /api/slow-report 200 12.4s
2024/03/15 14:23:32 192.168.1.54 GET /legacy/users 200 111ms
15-Mar-2024 14:23:33 192.168.1.55 POST /legacy/login 403 89ms
1710512594 192.168.1.56 GET /legacy/data 200 45

{"time":"2024-03-15T14:23:35Z","remote_ip":"10.2.2.2","verb":"GET","url":"/api/v2/users","code":200,"latency":"34ms"}

2024-03-15T14:23:36Z 192.168.1.57 GET /api/test 200
2024-03-15T14:23:37Z 192.168.1.58 GET /api/test2 - -
2024-03-15T14:23:38Z 192.168.1.59 GET /api/test3 502 0.8s
2024-03-15T14:23:39Z 192.168.1.60 GET /api/test4 200 140ms extra-field another-field
2024-03-15T14:23:40Z 192.168.1.61 GET /api/test5 200 17ms "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"


2024-03-15T14:23:41Z 192.168.1.62 POST /api/users 201 221ms
2024-03-15T14:23:42Z 192.168.1.63 GET /api/users 200 91ms
2024-03-15T14:23:43Z 192.168.1.64 GET /api/users 200 87ms
2024-03-15T14:23:44Z 192.168.1.65 GET /api/users 500 3.2s
2024-03-15T14:23:45Z 192.168.1.66 GET /api/cache 304 2ms
2024-03-15T14:23:46Z 192.168.1.67 POST /api/register 201 450ms
2024-03-15T14:23:47Z 192.168.1.68 GET /api/timeout 504 14s
2024-03-15T14:23:48Z 192.168.1.69 DELETE /api/account/12 204 122ms
2024-03-15T14:23:49Z 192.168.1.70 GET /api/users?page=99 200 104ms
2024-03-15T14:23:50Z 192.168.1.71 POST /api/payment 500 6.8s
```

