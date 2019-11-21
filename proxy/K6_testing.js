import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // virtual users
  stages: [
    { duration: "30s", rps: 1 },
    { duration: "30s", rps: 10 },
    { duration: "30s", rps: 100 },
    { duration: "30s", rps: 1000 },
  ]
  // rps: 1000,
  // 4 level from 1 - 1000
  // stages: [
  //   { duration: "1m", target: 1 },
  //   { duration: "1m", target: 10 },
  //   { duration: "1m", target: 100 },
  //   // { duration: "1m", target: 1000 }
  // ],
};

export default function () {

  const res1 = http.get(`http://localhost:3000/?${Math.round(Math.random()*1000000)}`);
  check(res1, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });

  const res2 = http.get(`http://localhost:3000/api/products/${Math.round(Math.random()*1000000)}`);
  check(res2, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}