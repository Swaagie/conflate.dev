function run(module) {
  module.run_app();

  const descriptor = document.getElementById("descriptor");
  const config = document.getElementById("config");

  // Use web component
  function onChange(event) {
    const from = descriptor.options[descriptor.selectedIndex]?.text;
    try {
      config.value = module.transcode(from, config.value);
    } catch (e) {
      console.error(e);
    }
  }

  // Attach listeners
  descriptor.addEventListener("change", onChange);
}

import("../pkg/index.js").then(run).catch(console.error);