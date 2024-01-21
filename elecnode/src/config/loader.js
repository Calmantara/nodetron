const { loadAsync } = require('node-yaml-config')

async function load(path) {
  // binding path
  const filePath = `elecnode/config/local.yaml`
  if (path !== null && path !== "" && path !== undefined){
    filePath = `elecnode/config/${path}`
  } 
  // binding config model
  let config = {}
  try{
    config = await loadAsync(filePath);
  }
  catch(err){
    console.log(err)
  }

  return config
}
module.exports = load