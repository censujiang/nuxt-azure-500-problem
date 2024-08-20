export default defineEventHandler(async (event) => {
  const test = $fetch("https://www.baidu.com")
  return test
})
