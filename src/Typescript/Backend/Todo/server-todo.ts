import app from "./todo";

const PORT_TODO = 3001;

app.listen(PORT_TODO, () => {
  console.log(`Server is running on http://localhost:${PORT_TODO}`);
});
