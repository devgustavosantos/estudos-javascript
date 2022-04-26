async function readJsonFile() {
  const response = await fetch('/file.json')
  const json = await response.json();
  console.log(json)
}

readJsonFile()
