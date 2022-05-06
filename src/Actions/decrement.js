export default function decrement(number = 1) {
  return {
    type: "decrement",
    number,
  };
}
