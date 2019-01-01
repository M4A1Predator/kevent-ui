export function loadData() {
  const  data = localStorage.getItem("auth")

  try {
    const serializedData = JSON.parse(data)
    return {
      auth: serializedData
    }
  } catch (error) {
    return {}
  }
}
