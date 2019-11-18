import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '240s',
  rps: 1000,
  throw: true,
};

export default function () {

  const res1 = http.get(`http://ec2-52-53-171-73.us-west-1.compute.amazonaws.com:3000/?${Math.round(Math.random()*1000000)}`);
  check(res1, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
}