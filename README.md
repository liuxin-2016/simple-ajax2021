# simple-ajax2021
ajax的简单封装


#示例

```js
import Http from "simple-ajax2021";

Http.get("https://XXXX/XXX",{ account: "1", password: "1" });
Http.post("https://XXXX/XXX",{ account: "1", password: "1" });
```

- 需要使用token的话，直接把token放到localStorage内，Http通过localStorage.token获取；