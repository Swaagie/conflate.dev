use wasm_bindgen::prelude::*;
use web_sys::{console};

#[wasm_bindgen]
pub fn run_app() {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();
}

#[wasm_bindgen]
pub fn transcode(to: &str, input: &str) -> String {
    // Detect from based on input
    let log = format!("Parsing type {from} to {to}", from = "json", to = to);
    console::log_1(&log.into());

    // Improve error handling and add matchers per type
    let transpiled: serde_json::Value = serde_json::from_str(input).expect("Error parsing JSON");
    serde_yaml::to_string(&transpiled).expect("Error parsing YAML")
}

#[wasm_bindgen]
pub fn detect() {
    // Detect config type
}

