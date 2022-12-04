import { startApp } from "./index";

const port = process.env.PORT || 3000;
const app = startApp();

app.listen(port, () => {
  console.log("server running in port 🔥 ", port);
});
