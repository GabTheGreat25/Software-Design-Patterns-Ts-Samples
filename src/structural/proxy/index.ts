import { RealSubject } from "./realSubject";
import { Proxy } from "./proxy";

export default function proxyPattern() {
  const realSubject = new RealSubject();
  const proxy = new Proxy(realSubject);

  console.log(proxy.request()); // Output: Proxy: Call to RealSubject: Handling request.
}
